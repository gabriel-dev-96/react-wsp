import React from 'react'
import styled from 'styled-components'
import { FaFileWord } from "react-icons/fa";

const Document= styled.div`
    width: fit-content;
    max-width: 50%;
    padding: 5px;
    &> a{
        padding: 5px;
        color: #ffff;
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
    &>svg{
        font-size: 20px;
        margin: 5px;
    }
`

const MessageDocument = ({ message }) => {
    return (
        <Document className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            <FaFileWord/>
            <a 
                href={`data:${(message.media.mimetype === 'application/pdf') ? 'pdf' : null};base64,${message.media.data}`} 
                download={message.media.filename}>{message.media.filename}
            </a>
            <span className="chat__timestamp">{new Date(message.timestamp * 1000).toLocaleString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit' })}</span>
        </Document>
    )
}

export default MessageDocument
