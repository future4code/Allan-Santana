import React from 'react';
import { createGlobalStyle } from "styled-components";
import Router from './Routes/Router';



const GloabalStyle = createGlobalStyle`
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

const App = () => {
  return (
    <>
      <GloabalStyle />
      <Router/>
    </>
  )
}

export default App
