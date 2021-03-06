import styled from 'styled-components';

export const ChatHTML = styled.div`
    flex: 0.65;
    display: flex;
    flex-direction: column;
    height: 400px;
`

export const ChatHeader = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
`

export const ChatHeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;
    & > h3{
        margin-bottom: 3px;
        font-size: 500;
    }
    & > p{
        color: gray;
    }
`

export const ChatMessage = styled.p`
    position: relative;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    background-color: #ffffff;
    margin-bottom: 30px;
`

export const ChatReciever = styled.div`
    margin-left: auto;
    background-color: #dcf8c6;
`

export const ChatTimestamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`

export const ChatName = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
`

export const ChatHeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100px;
`

export const ChatBody = styled.div`
    
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    flex: 1 1 auto;
    overflow-y: auto;
    height: 80vh; 
`
/*
export const ChatFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: #1E2428;
    & > form{
        flex: 1;
        display: flex;
        & > button{
            display: none;
        }
        & > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
        }
        & > input:focus{
        outline: none;
        }
    }
    & > form > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
    }
    & .MuiSvgIcon-root{
        margin: 10px;
        color: gray;
    }
`*/

export const ChatFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    height: 60px;
    margin-bottom: 10px;
    background-color: #1E2428;
    & > form{
        flex: 1;
        display: flex;
        & > button{
            display: none;
        }
        & > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
        }
        & > input:focus{
        outline: none;
        }
    }
    & > form > textarea {
        flex: 1;
        resize: none;
        border-radius: 30px;
        overflow: hidden;
        padding-left: 15px;
        padding-top: 8px;
        height: 40px;
        border: none;
    }
    & > form > textarea:focus {
        outline: none;
    }
    & > .MuiSvgIcon-root{
        padding: 15px;
        font-size: 2rem;
        width:auto;
        color: gray;
        cursor: pointer;
    }
`
export const MessageFast = styled.div`
    position: absolute;
    z-index: 1;
    padding-right: 20px;
    bottom: 50px;
    width: 100%;
    display: ${(props) => (props.show ? 'block' : 'none')};
    background-color: #1E2428;
    height: fit-content;
    transition: 0.3;
    overflow-y: scroll;
    height: 20vh;
    color: #ffff;
    & :hover{
        cursor: pointer;
        background-color: #808080;
    }
    &::-webkit-scrollbar { 
        width: 0 !important 
    }
    &> p{
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        margin: 5px 5px;
        padding: 5px;
        //position: relative;
    }
`