import React from 'react';
import { createGlobalStyle } from "styled-components";
import Router from './routes/Router';



const GloabalStyle = createGlobalStyle`
    body { 
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #202124;
    color: #bdc1c6;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div{
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      min-height: 100%;
      width: 100%;
      max-width: 800px;
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
