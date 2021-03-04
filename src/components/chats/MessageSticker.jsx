import React from 'react'
import styled from 'styled-components'

const Sticker= styled.div`
    width: auto;
    max-width: 20%;
    padding: 5px;
    &> img{
        border-radius: 6px;
    }
`
const MessageSticker = ({message}) =>(
        <Sticker className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            <img className="img-fluid" src={`data:${message.media.mimetype};base64,${message.media.data}`} alt="imga"/>
        </Sticker>
    )


export default MessageSticker
