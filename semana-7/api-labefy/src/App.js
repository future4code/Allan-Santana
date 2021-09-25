import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import CriacaoDePlaylist from './components/CriacaoDePlaylist';

const ContainerPrincipal = styled.div`
background-color: #202124;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;`

export default class App extends React.Component {
  render() {
    return (
      <ContainerPrincipal>

        <CriacaoDePlaylist/>

      </ContainerPrincipal>
    )
  }
}
