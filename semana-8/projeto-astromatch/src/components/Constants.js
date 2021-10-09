import styled from "styled-components"

// Styles from Home component

export const CurrentProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    margin: auto;
    border-radius: 3px;
    /* div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-width: 300px;
        background-color: white;
        width: 25%;
        min-height: 75%;
        border-radius: 3px;
    } */
    button{
        position: absolute;
        bottom: 20px;
        right: 10px;
    }
    /* div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    } */
    /* div > img{
        margin: 10px 0;
        min-width: 90%;
        min-height: 60%;
        max-width: 100%;
        max-height: 100%;
    } */
`

export const ActualProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    background-color: white;
    width: 25%;
    min-height: 75%;
    border-radius: 3px;
`

export const PhotoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100% !important;
    img{
    margin: 10px 0;
    min-width: 90%;
    min-height: 60%;
    max-width: 100%;
    max-height: 100%;
    height: 80%;
    /* max-height: 60%; */
    width: 90%;
    -webkit-box-shadow: 0px 0px 32px -8px rgba(0,0,0,0.71); 
    box-shadow: 0px 0px 32px -8px rgba(0,0,0,0.71);
    }
    p{  
        float: inline-end;
        position: static;
        bottom: 0;
    }
`

export const ButtonsDisposition = styled.div`
/* all: initial; */
display: flex !important; 
flex-direction: row !important;
justify-content: space-around !important;
align-items: center !important;
/* width: 100% !important; */
height: 10% !important;
width: 100% !important;
padding: 10px 0;
img {
    max-height: 50px !important;
    max-width: 60px !important;
    height: 80% !important;
    width: 50% !important;
    min-width: unset !important;
    margin: 0 !important;
    cursor: pointer;
}
`
// Styles for ListOfMatchs
export const ListOfMatchsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-width: 300px;
    background-color: white;
    width: 25%;
    min-height: 75%;
    border-radius: 3px;
`

export const ListOfMatchsStyle = styled.div`
/* display: flex;
flex-direction: column !important;
justify-content: space-around !important; */
width: 100%; 
/* height: 50px;  */
div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: center;
    min-width: unset !important;
    width: 100%;
    /* border-style: solid;
    border-color: lightgray;
    border-width: 0 0 1cm 0;
    border-radius: 3px; */
    /* -webkit-box-shadow: 0px 22px 43px -1px rgba(0,0,0,0.32); 
    box-shadow: 0px 22px 43px -1px rgba(0,0,0,0.32); */
    margin: 5px 0;
    cursor: pointer;
}
div:hover {
    display: flex;
    justify-content: center;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 10%;
    width: 80%;
    
}

img {
    width: 10%;
    height: 50px;
    min-width: 50px !important;
    max-height: 50px !important;
    width: 10%;
    margin: 5px 0;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
}
div > p {
    width: 60%; 
    font-weight: 800;
}
`

// export const ItemOfTheList = styled.div`
//     /* display: flex;
//     flex-direction: row !important;
//     justify-content: space-around;
//     align-items: center;
//     min-width: unset !important; */
//     div{
//         display: flex;
//         flex-direction: column !important;
//         justify-content: space-around;
//         align-items: center;
//         min-width: unset !important;
//     }
//     img {
//         width: 10%;
//         height: 50px;
//         min-width: 50px !important;
//         max-height: 50px !important;
//     }
//     p{
//         display: flex;
//         width: 80%;
//         min-height: 50px;
//     }
// `
// Shared Styles

export const Header = styled.div`
        display: flex;
        flex-direction: row !important;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        width: 100% !important;
        /* min-height: unset !important;
        max-height: 10% !important; */
        height: 10%;
        border: solid lightgray;
        border-width: 0 0 0.1px 0;
    img{
        max-width: 10%;
        max-height: 80%;
        cursor: pointer;
    }
`