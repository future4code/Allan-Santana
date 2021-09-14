import React from 'react'
import styled from 'styled-components';
import './App.css';
import Form from './components/Form/Form';

const Formulario = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
  /* height: 50px;
  width: 50px; */
  margin-bottom: 12px;
}
`

class App extends React.Component {

  state = {
    formulario: [

      {<Form />}

    ],

    nomeDoUsuario: "",
    idadeDoUsuario: "",
    emailDoUsuario: ""
  };

  render() {

    const formularioAtual = this.state.formulario.map((perguntas) =>{

      return (
        <Formulario
        {...perguntas}/>

      );

    })

    return (

      <Formulario>

        {formularioAtual}

        {/* <img src="https://picsum.photos/400/400?a=7"/> */}

        <button>Próxima etapa</button>

      </Formulario>
    );
  }
}


export default App;
