import actionTypes from '../actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    updateChat: (header, messages)=>({
        type: actionTypes.UPDATE_CHAT,
        header,
        messages
    }),
    addMessage: (message)=> ({
        type: actionTypes.ADD_MESSAGE,
        message
      }),
}