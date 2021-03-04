import React, { useContext } from 'react'
import { SidebarChatHTML, SidebarChatInfo } from './SidebarChatElements';
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import chatActions from '../../redux/actions/chatActions';
import { SocketContext } from '../../context/socket';

const SidebarChat = (props) => {
    const { name, idChat, addNewChat } = props
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    const getChat = () => {
        socket.emit("GET:MESSAGES", idChat._serialized, (data) => {
            console.log(data, name);
            dispatch(chatActions.updateChat(name, data))
        })
    }
    return !addNewChat ? (
        <SidebarChatHTML onClick={getChat}>
            <AiOutlineUser />
            <SidebarChatInfo>
                <h2>{name}</h2>

            </SidebarChatInfo>
        </SidebarChatHTML>
    ) : (
            <SidebarChatHTML>
                <h2>Crear Grupo</h2>
            </SidebarChatHTML>
        )
}

export default SidebarChat
