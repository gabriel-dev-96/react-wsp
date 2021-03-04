import styled from 'styled-components'

const Quoted = styled.div`
    width: 100%;
    max-width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    border-left: 4px solid #35CD96;
    background-color: #065051;
    margin-bottom: 5px;
    &>h6{
        width: 100%;
        font-size: 12px;
        margin-bottom: 5px;
    }
    &> p{
        width: fit-content;
        max-width: 100%;
        font-size: 10px;
        margin-bottom: 0px;
        max-height: 40px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
`
const MessageQuoted = ({quotedMsg}) => {
    const { body, fromMe, id } = quotedMsg
    return (
        <Quoted>
            <h6>{(fromMe) ? 'Tú' : (id.remote.user)}</h6>
            <p>{body}</p>
        </Quoted>
    )
}

export default MessageQuoted