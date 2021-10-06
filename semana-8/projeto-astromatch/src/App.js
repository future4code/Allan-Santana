import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';


const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`
const GlobalStyle = createGlobalStyle`
  height: 100vh;
  width: 100vw;
  body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  }
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
