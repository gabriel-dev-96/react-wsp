import React, { useEffect, useContext, useState } from 'react'
import { SidebarHTML, SidebarHeader, SidebarHeaderRight, SidebarSearch, SidebarSearchContainer, SidebarChats } from '../chat/SidebarElements'
import { MdModeEdit, MdMoreVert, MdSearch } from "react-icons/md";
import { SocketContext } from '../../context/socket';
import { ChatItem, Avatar } from 'react-chat-elements'
import { useDispatch, useSelector } from 'react-redux';
import chatActions from '../../redux/actions/chatActions';
import chatsActions from '../../redux/actions/chats.action';
//import { useParams } from 'react-router-dom'

const Sidebar = () => {
    const socket = useContext(SocketContext);
    //const { phone } = useParams()
    const [chats, setChats] = useState([])
    //const chats = useSelector(state => state.chats)
    console.log(chats)
    const dispatch = useDispatch();

    const getChat = async(name, _serialized) => {
        //console.log(name, _serialized)
        socket.emit("GET:MESSAGES", _serialized, (data) => {
            //console.log(data)
            dispatch(chatActions.updateChat({ name, _serialized }, data))
        })
    }
    useEffect(() => {
        socket.emit("GET:CHATS", (data) => {
            console.log(data)
            setChats(data)
            //dispatch(chatsActions.createChats(data))
        })
    }, [socket,dispatch])
    return (
        <div className="col-3 px-0">
            <SidebarHTML>
                <SidebarHeader>
                    <Avatar
                        src={'https://avatars.dicebear.com/4.5/api/human/asdasdadsf.svg'}
                        alt={'logo'}
                        size="large"
                        type="circle flexible" />
                    <h3>Avatar</h3>
                    <SidebarHeaderRight>
                        <MdModeEdit size='30px' />
                        <MdMoreVert size='30px' />
                    </SidebarHeaderRight>
                </SidebarHeader>
                <SidebarSearch>
                    <SidebarSearchContainer>
                        <MdSearch />
                        <input placeholder="Search ..." type="text" />
                    </SidebarSearchContainer>
                </SidebarSearch>
                <SidebarChats>
                    {chats.map((chat, index) => (
                        <ChatItem
                            key={index}
                            avatar={'https://avatars.dicebear.com/4.5/api/human/asdasdadsf.svg'}
                            alt={'Reactjs'}
                            title={chat.name}
                            subtitle={'What are you doing?'}
                            date={new Date(chat.timestamp * 1000)}
                            unread={chat.unreadCount}
                            statusColor={'green'}
                            onClick={() => getChat(chat.name, chat.id._serialized)}
                        />
                    ))}
                </SidebarChats>
            </SidebarHTML>
        </div>
    )
}

export default Sidebar
