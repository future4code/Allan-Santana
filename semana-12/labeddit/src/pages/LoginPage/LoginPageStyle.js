import styled from "styled-components"

export const LoginPageContainer = styled.div`
width: 50%;
height: 60%;
min-width: auto;
max-width: 400px;
min-height: auto;
max-height: 300px;
background-color: white;
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
div > button{
    cursor: pointer;
    width: 20%;
    height: 40%;
    min-width: 40px;
    margin-left: 14px;
    font-size: 30%;
}
div{
    width: 100%;
    height: 30%;
    min-height: auto;
}
div > label{
    text-align: left;
    width: 30%;
    font-size: 50%;
}
div > input{
width: 70%;
}
}
`