import socketio from "socket.io-client";
//import { SOCKET_URL } from "config";
import React from 'react'

const SOCKET_URL = "http://localhost:4000/whatsapp";
//const SOCKET_URL = "https://tecolo-dev.herokuapp.com/whatsapp";
export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();