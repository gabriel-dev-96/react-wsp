import chatsType from '../types/chats.type'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createChats: (chats)=>({
        type: chatsType.CREATE,
        chats
    })
}