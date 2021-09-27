import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerPrincipal = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: darkgrey;`

const ContainerBusca = styled.div`
width: 40%;
min-height: 20%;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
input{
  border-radius: 10px;
  margin: 8px;
  border: 1px solid black;
  padding: 8px;
}
button{
  background-color: blue;
  color: white;
  border: none;
  margin: 8px auto;
  width: 40%;
  border-radius: 10px;
  height: 30px;
}`

export default class App extends React.Component {

  state = {

    busca:'',

  };

  onChangeInputBusca = (event) => {
    this.setState({ busca: event.target.value});
  };

  onClickBuscar = () =>{

    axios.get(`https://pokeapi.co/api/v2/nature/${this.state.busca}/`).then((response) => {
        alert(response.id)
      }).catch((error) => {
        alert(error)
      })
      this.setState({ busca: '' })
  };

  render() {
    return (
      <ContainerPrincipal>

        <ContainerBusca>
          <input
            placeholder="Insira o nome do pokemon"
            value={this.state.busca}
            onChange= {this.onChangeInputBusca} 
            />

          <button onClick={() => this.onClickBuscar()}>Buscar</button>
        </ContainerBusca>

      </ContainerPrincipal>
    )
  }
}
