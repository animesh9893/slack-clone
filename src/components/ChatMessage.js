import React from 'react'
import styled from 'styled-components';




function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="i"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Animesh
                    <span>5:15 pm</span>
                </Name>
                <Text>
                    Hello Good evening
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover{
        background: #DCDCDC;
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    broder-radius: 2px;
    overflow: hidden;
    margin-right: 8px;
    img{
        width:100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgba(97,96,97);
        font-size: 13px;
    }
`
const Text = styled.span`

`
