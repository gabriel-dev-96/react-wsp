import actionTypes from '../actionTypes'

const initialState = {
    chat: {
        header: {},
        messages:[]
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.UPDATE_CHAT: {
            const { header, messages } = action
            const chat = {
                header,
                messages
            }
            return {
                chat
            }
        }
        case actionTypes.ADD_MESSAGE: {
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