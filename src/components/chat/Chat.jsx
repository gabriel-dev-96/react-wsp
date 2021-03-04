import React from 'react'
import { ChatHTML, ChatHeader, ChatHeaderInfo, ChatMessage, ChatName, ChatHeaderRight, ChatBody } from './ChatElements';
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEdit, MdMoreVert, MdSearch } from "react-icons/md";
import { useSelector } from 'react-redux';

const Chat = () => {
    const chat = useSelector(state => state.chat.chat)
    console.log(chat)

    return (
        <ChatHTML>
            <ChatHeader>
                <AiOutlineUser src={`https://avatars.dicebear.com/api/human/sdd.svg`} />
                <ChatHeaderInfo>
                    <h3>{(Object.keys(chat.header).length === 0) ? 'Seleccione uno' : (chat.header)}</h3>
                    <p>Last seen at ....
                    17-11-2020
                    </p>
                </ChatHeaderInfo>
                <ChatHeaderRight>
                    <MdModeEdit />
                    <MdSearch />
                    <MdMoreVert />
                </ChatHeaderRight>
            </ChatHeader>
            <ChatBody>
                {(chat.messages.length !== 0 ? (chat.messages.map((message, index) => (
                    <ChatMessage
                        key={index}>
                        <ChatName>{message.from}</ChatName>
                        {message.body}

                    </ChatMessage>
                ))) : (<h1>No hay Mensajes</h1>))}
            </ChatBody>
        </ChatHTML>
    )
}

export default Chat
