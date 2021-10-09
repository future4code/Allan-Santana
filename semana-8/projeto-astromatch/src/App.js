import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body{
  box-sizing: border-box;
  background-color: lightgray;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  }
`


function App() {
  return (
    
    <div>
      <GlobalStyle/>
      <Home/>
    </div>
  )
}

export default App
