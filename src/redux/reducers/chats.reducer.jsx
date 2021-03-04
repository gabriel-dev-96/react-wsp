import chatsType from '../types/chats.type'

const initialState = {
    chats: []

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action)=>{
    switch(action.type){
        case chatsType.CREATE: {
            return {
                ...state, chats: action.chats
            }
        }
        case chatsType.ADD_MESSAGE: {
            const chat = {...state.chat};
            const { message } = action
            if(chat.header._serialized===message.id.remote){
                chat.messages.push(message);
            }else if(chat.header._serialized===message.id.remote._serialized){
                chat.messages.push(message)
            }
            return {
              chat,
            }
          }
        default:
            return state
    }
}