import { SidebarHTML, SidebarHeader, SidebarHeaderRight, SidebarSearch, SidebarSearchContainer, SidebarChats } from './SidebarElements';
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEdit, MdMoreVert, MdSearch } from "react-icons/md";
import {SocketContext} from '../../context/socket';
import chatsActions from '../../redux/actions/chats.action';
import React, {useContext, useEffect} from 'react'
import SidebarChat from './SidebarChat'
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const socket = useContext(SocketContext);
    //const [chats, setChats] = useState([])
    const { chats } = useSelector(state => state.chat)
    const dispatch = useDispatch();


    useEffect(()=>{
        socket.emit("GET:CHATS",(data)=>{
            console.log(data)
            //setChats(data)
            dispatch(chatsActions.createChats(data))
          })
    },[socket, dispatch])

    return (
        <SidebarHTML>
            <SidebarHeader>
                <AiOutlineUser src="" />
                <h3>Avatar</h3>
                <SidebarHeaderRight>
                    <MdModeEdit/>
                    <MdMoreVert />
                </SidebarHeaderRight>
            </SidebarHeader>
            <SidebarSearch>
                <SidebarSearchContainer>
                    <MdSearch />
                    <input placeholder="Search ..." type="text" />
                </SidebarSearchContainer>
            </SidebarSearch>
            <SidebarChats>
                <SidebarChat addNewChat />
                {chats.map(chat => (
                    <SidebarChat
                        key={chat.id._serialized}
                        id={chat.id._serialized}
                        name={chat.name}
                        phone={chat.id.user}
                        idChat={chat.id}
                    />
                ))}
            </SidebarChats>
        </SidebarHTML>
    )
}

export default Sidebar
