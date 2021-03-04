import axios from 'axios'

const ENDPOINT = 'https://emoji-api.com'
const KEY = '8dcbded332499652c68f5ac1e44bbef0186c9c2f'

export const getEmoticons=async()=>{
    return await axios.get(`${ENDPOINT}/emojis?access_key=${KEY}`)
}