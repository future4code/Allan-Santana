import styled from "styled-components"

export const LoginPageContainer = styled.div`
width: 25%;
height: 30%;
min-width: 400px;
min-height: 300px;
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
}
div{
    width: 100%;
    height: 30%;
}
div > label{
    text-align: left;
    width: 30%;
}
div > input{
width: 70%;
}
}
`