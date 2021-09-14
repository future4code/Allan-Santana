import React from 'react'
import styled from 'styled-components';
import './App.css';
import Form from './components/Form/Form';
import FormEnsinoSuperior from './components/Form/FormEnsinoSuperior';
import FormInformacoesDeEnsino from './components/Form/FormInformacoesDeEnsino';
import Endpage from './components/Form/Endpage';

const Formulario = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
  margin-bottom: 12px; 
}
`



class App extends React.Component {

  state = {
    formulario: [

      <Form />

    ],

    nomeDoUsuario: "",
    idadeDoUsuario: "",
    emailDoUsuario: "",
    paginaAtual: 1,
  };

  onClickChangePage = () => {

    this.setState((numeroDaPagina) => {
      if(numeroDaPagina.paginaAtual == 4){

        alert("O formulário acabou.")

      }else{

      return {
        paginaAtual: numeroDaPagina.paginaAtual + 1
      };
    }
  });

  };

  paginaDePreenchimento () {
    switch(this.state.paginaAtual){
      case 1: return (
      <Form/>
      );
      case 2: return (
        <FormEnsinoSuperior/>
      );
      case 3: return(
        <FormInformacoesDeEnsino/>
      );
      case 4: return(

        <Endpage/>

      )
    }
  };

  botaoProximaEtapa = () => {

      if(this.state.paginaAtual == 4){

        console.log("fim")

      }else{

      return (<button onClick={this.onClickChangePage}>Próxima etapa</button>)

      };
  };

  render() {


    return (

      <Formulario>
        
        {this.paginaDePreenchimento()}

       {this.botaoProximaEtapa()}

      </Formulario>



    );
  }
}

export default App;
