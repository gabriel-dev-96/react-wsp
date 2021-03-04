import React from 'react'
import { AppBody, AppHTML } from "../../AppElements";
import Sidebar from "./Sidebar";
import Chat from './Chat'


const WhatsApp = () => {

    return (
            <AppHTML>
                <AppBody>
                <Sidebar/>
                <Chat/>
            </AppBody>
            </AppHTML>
    )
}

export default WhatsApp
