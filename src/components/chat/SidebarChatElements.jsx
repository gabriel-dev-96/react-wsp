import styled from 'styled-components';


export const SidebarChatHTML = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;
    &:hover{
        background-color: #ebebeb;
    }
    text-decoration: none !important;
    color: black;
`



export const SidebarChatInfo = styled.div`
    margin-left: 15px;
    & > h2{
        font-size: 16px;
        margin-bottom: 8px;
    }
`
  