import React from 'react'
import './message.css'
import MessageQuoted from './MessageQuoted'


const MessageText = ({ message }) => {
    return (
        <div className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            {(message.hasQuotedMsg) ? <MessageQuoted quotedMsg={message.quotedMsg} /> : null}
            {message.body}
            <span className="chat__timestamp">{new Date(message.timestamp * 1000).toLocaleString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit' })}</span>
        </div>
    )
}

export default MessageText
