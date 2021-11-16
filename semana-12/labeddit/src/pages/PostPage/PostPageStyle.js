import styled from "styled-components";

export const PostPageStyle = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
min-height: 100%;
form{
    width: 70%;
    height: 100%;
    margin-bottom: 16px;
}
textarea {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    border: none;
    padding: 12px;
    text-align: left;
    resize:none
}
button{
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
    border: none;
}
p{
    
}
`
export const PostContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: auto;
    margin: 16px 0;
section{
    width: 100%;
    color: black;
    height: 100%;
    background-color: white;
    div{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        height: 20%;
        padding: 0 12px;
    }
    div > h5{
        width: 30%;
        text-align: left;
        margin: 0;
    }
    img{
        cursor: pointer;
        width: 30%;
        height: 80%;
    }
}

section > p:nth-child(2){
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    text-align: start;
    width: 100%;
    height: 60%;
    padding: 4px 12px;
}
p:nth-child(2){
    margin: 0 4px;
}
footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
    div:nth-child(1){
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 30%;
        height: 100%;
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            height: 80%;
            margin: 0;
            text-align: center;
        }
    }
    div:nth-child(2){
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 70%;
        height: 100%;
        padding: 0 12px;
    p{
    margin: 0;
    text-align: center;
    }
    }
    
}
`