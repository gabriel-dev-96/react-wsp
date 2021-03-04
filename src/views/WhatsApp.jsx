import React from 'react'
//import { useParams } from 'react-router-dom'
import Sidebar from '../components/chats/Sidebar'
import Chat from '../components/chats/Chat'

const WhatsApp = () => {
    //const { phone } = useParams()

    return (
        <div className="row container-fluid px-0 mx-0">
            <Sidebar/>
            <Chat/>
        </div>
    )
}

export default WhatsApp
