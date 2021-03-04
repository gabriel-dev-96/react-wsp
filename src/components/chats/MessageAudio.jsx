import React from 'react'

const MessageAudio = ({ message }) => {
    return (
        <div className={`chat__message ${message.fromMe && 'chat__reciever'}`}>
            <audio controls>
                <source src={`data:audio/ogg;base64,${message.media.data}`}></source>
            </audio>
        </div>
    )
}

export default MessageAudio
