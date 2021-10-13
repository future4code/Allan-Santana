import styled, { createGlobalStyle } from "styled-components";

export const GloabalStyle = createGlobalStyle`
    body { 
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #202124;
    color: #bdc1c6;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      height: 100%;
      width: 100%;
    }
`;

export const GeneralContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const HomePageGeneralContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 80%;
`;

export const InitialOptionsContainer = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  width: 50%;
`;

export const ButtonDisposition = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 200px;
  :hover {
    transform: translateY(-0.25rem);
  }
  img {
    position: relative;
    height: 100%;
    width: 100%;
  }
  figcaption {
    text-align: center;
    margin: 8px 0;
  }
`;

export const HeaderStyle = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 10%;
font-weight: 800;
background: rgb(32,33,36);
background: linear-gradient(90deg, rgba(32,33,36,1) 0%, rgba(9,9,121,1) 34%);
h1{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20%;
  height: 90%;
  margin: 0 40px;
  
}
div{
  margin: 0 40px;
  width: initial;
}
button{
  color: black;
  text-align: center;
  height: 70%;
  min-width: 10vw;
  margin: 0 4px;
}
p{
  text-align: center;
  margin: 0;
}
`

export const TravelPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 100%;
width: 100%;

`
