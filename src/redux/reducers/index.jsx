import {combineReducers} from 'redux'
import chat from './chat'
import chats from './chats.reducer'

export default combineReducers({
    chat,
    chats
})