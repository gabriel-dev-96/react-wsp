import React from 'react'
import styled from 'styled-components'

const Image= styled.div`
    width: auto;
    max-width: 50%;
    padding: 5px;
    &> img{
        border-radius: 6px;
    }
`
const MessageImage = ({message}) => {
    return (
        <Image className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            <img className="img-fluid" src={`data:${message.media.mimetype};base64,${message.media.data}`} alt="imga"/>
        </Image>
    )
}

export default MessageImage
