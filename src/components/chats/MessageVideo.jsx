import React from 'react'
import styled from 'styled-components'

const Video= styled.div`
    width: fit-content;
    height: 50%;
    max-width: 50%;
    padding: 5px;
    &> video{
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
`

const MessageVideo = ({ message }) => {
    return (
        <Video className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            <video controls>
                <source type="video/webm" src={`data:${message.media.mimetype};base64,${message.media.data}`}/>
            </video>
        </Video>
    )
}

export default MessageVideo
