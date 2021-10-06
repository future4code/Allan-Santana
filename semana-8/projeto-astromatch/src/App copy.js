import React, {useState, useEffect} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';


const MainPage = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`


function App() {
  return (
    
    <MainPage>
      <GlobalStyle/>
      <Home/>
    </MainPage>
  )
}

export default App
