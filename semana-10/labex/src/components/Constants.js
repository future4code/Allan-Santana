import styled, { createGlobalStyle } from "styled-components";

export const GloabalStyle = createGlobalStyle`
    body { 
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #202124;
    font-family: Arial, Helvetica, sans-serif;
    }
    div{
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
  h1{
      color: white;
  }
`;

export const InitialOptionsContainer = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-around;
  height: 10%;
  width: 30%;
  img{
      cursor: pointer;
  }
`;
