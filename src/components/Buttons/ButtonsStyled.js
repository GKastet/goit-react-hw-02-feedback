import styled from 'styled-components';

export const Section = styled.section`    
    box-sizing: border-box;
    width:400px;
    margin: 0 auto;
    margin-top: 70px;
    padding: 20px 0;
    text-align: center;
    h2{
        margin: 0;
        font-size: 30px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 20px 0;        
    }
    button{
        width: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        text-transform: capitalize;
        background-color: lightyellow;
        transition: background-color 250ms linear;
        &:hover{
            background-color: yellow;
        }
    }
`