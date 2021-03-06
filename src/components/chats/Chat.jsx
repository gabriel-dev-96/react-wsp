import React, { useEffect, useContext, useState } from 'react'
import { SocketContext } from '../../context/socket';
import { useDispatch } from 'react-redux';
import chatActions from '../../redux/actions/chatActions';
import { ChatFooter, MessageFast } from '../chats/ChatElements'
import { MdMood, MdMic, MdAttachFile } from "react-icons/md";
import MessageText from './MessageText'
import MessageAudio from './MessageAudio'
import MessageImage from './MessageImage'
import MessageSticker from './MessageSticker'
import MessageVideo from './MessageVideo'
import MessageDocument from './MessageDocument'
import {messagesFast} from '../../db/messagesFast'
import * as serviceEmoji from '../../services/emoji.service'
import {messagesData} from '../../db/messages';

import './chat.css'

const Chat = () => {
    //const { header, messages } = useSelector(state => state.chat.chat)
    const [messages, setMessages] = useState([])
    const [toogleFastMessage, setToggleFastMessage]= useState(false)
    const [message, setMessage] = useState({
        body: '',
        name: 'gabriel',
        to: '',
        hasMedia: false,
        files: []
    })

    const getEmoticons = async () => {
        const result = await serviceEmoji.getEmoticons()
        console.log(result)
    }
    const sendMessage = () => {
        setMessage({ ...message })
        socket.emit("POST:MESSAGE", message)
        setMessage({ ...message, body: '', hasMedia: false, files: [] })
        document.getElementById('whatsapp__file').value = ''
    }

    const handleMessage = (e) => {
        const { name, value } = e.target
        if(value.indexOf("/")!==-1){
            setToggleFastMessage(true)
        }else{
            setToggleFastMessage(false)
        }
        setMessage({ ...message, [name]: value })
    }
    const toBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
    });
    const getFastMessage=(msg)=>{
        setMessage({...message,body: msg})
        setToggleFastMessage(false)
    }
    const handleMedia = async (e) => {
        const files = Object.values(e.target.files)
        //console.log(files)
        const filesBase64 = await Promise.all(files.map(async(file)=> (
            {
                mimetype: file.type, 
                dataBase64: await toBase64(file),
                filename: file.name
            }
        )))
        setMessage({...message, hasMedia: true, files: filesBase64})
    }
    const dispatch = useDispatch();

    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('whatsapp:message', (data) => {
            console.log(data)
            dispatch(chatActions.addMessage(data))
        });
        setMessages(messagesData)
    }, [socket, dispatch])
    return (
        <div className="col-9 px-0">
            <div className="chat">
                <div className="chat-header clearfix">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

                    <div className="chat-about">
                        <div className="chat-with">Anthony</div>
                        <div className="chat-num-messages">already 1 902 messages</div>
                    </div>
                    <i className="fa fa-star"></i>
                </div>
                <div className="chat-history">
                    {messages.map((message, index) => {
                        if (message.type === 'ptt' && message.hasMedia) return <MessageAudio message={message} key={index} />
                        if (message.type === 'image' && message.hasMedia) return <MessageImage message={message} key={index} />
                        if (message.type === 'sticker' && message.hasMedia) return <MessageSticker message={message} key={index} />
                        if (message.type === 'video' && message.hasMedia) return <MessageVideo message={message} key={index} />
                        if (message.type === 'document' && message.hasMedia) return <MessageDocument message={message} key={index} />
                        return <MessageText message={message} key={index} />
                    })}
                    
                </div>
                <MessageFast show={toogleFastMessage}>
                    {messagesFast.map((message, index)=>(
                        <p onClick={()=>getFastMessage(message.body)} key={index}>{message.title} - {message.body}</p>
                    ))}
                </MessageFast>
                <ChatFooter>
                    <MdMood className="MuiSvgIcon-root" size='4rem' onClick={getEmoticons} />
                    <label htmlFor="whatsapp__file" className="MuiSvgIcon-root"><MdAttachFile /></label>
                    <form>
                        <textarea
                            type="text"
                            name="body"
                            onChange={handleMessage}
                            value={message.body}
                            onKeyPress={(e)=> (e.key==='Enter')? sendMessage(): null}
                        />
                        <input
                            name="files"
                            type="file"
                            multiple
                            onChange={handleMedia}
                            id="whatsapp__file"
                            hidden
                        />
                        <button type="submit">Send a message</button>
                    </form>
                    <MdMic className="MuiSvgIcon-root" size='4rem' />
                </ChatFooter>
            </div>
        </div>
    )
}

export default Chat
