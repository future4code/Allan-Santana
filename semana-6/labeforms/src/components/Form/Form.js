import React from 'react';
import styled from 'styled-components';


const OrganizacaoDosElementos = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px;
width: 100%;

label{
  margin-bottom: 12px;
}
input{
  /* height: 50px;
  width: 50px; */
}
select{
  margin-bottom: 12px;
  display: flex;
  text-align: center;
  padding: 2px;
}
button{

}
`
const FormDisposition = styled.div`
display:flex;
flex-direction: column;
`

class Form extends React.Component {

  state = {

    forms1: [

    ],

    nomeDoUsuario: "",
    idadeDoUsuario:"",
    emailDoUsuario:"",
    escolaridadeDoUsuario:"",

  };

  onChangeInputNomeUsuario = (event)=>{

    this.setState({nomeDoUsuario: event.target.value})

  };

  onChangeInputIdadeDoUsuario = (event)=>{

    this.setState({idadeDoUsuario: event.target.value})

  }

  onClickCurtida = () => {

    console.log('Curtiu!')

    if(!this.state.curtido){

      this.onClickSoma()

    } else{

      this.onClickSubtrai()

    }
  }

  render() {

    return <OrganizacaoDosElementos>

      <h3>ETAPA 1 - DADOS GERAIS</h3>

      <FormDisposition>

        <label for="escolaridade">Qual a sua escolaridade?</label>

        <input

              value={this.state.nomeDoUsuario}

              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Seu nome completo."}
        />

      </FormDisposition>
      <FormDisposition>

        <label for="escolaridade">Qual a sua escolaridade?</label>

        <input

        value={this.state.idadeDoUsuario}

        onChange={this.onChangeInputIdadeDoUsuario}
        placeholder={"Informe sua idade."}
        />

      </FormDisposition>
      <FormDisposition>
        <label for="escolaridade">Qual a sua escolaridade?</label>

        <input

        value={this.state.emailDoUsuario}

        onChange={this.onChangeInputemailDoUsuario}
        placeholder={"Informe seu e-mail."}
        />

      </FormDisposition>
      <FormDisposition>

        <label for="escolaridade">Qual a sua escolaridade?</label>

        <select name="escolaridade" id="escolaridade">
          <option value={this.state.ensinoMedioIncompleto}>Ensino Médio Incompleto</option>
          <option value={this.state.ensinoMedioCompleto}>Ensino Médio Completo</option>
          <option value={this.state.ensinoSuperiorIncompleto}>Ensino Superior Incompleto</option>
          <option value={this.state.ensinoSuperiorCompleto}>Ensino Superior Completo</option>
        </select> 

      </FormDisposition>

    </OrganizacaoDosElementos>
  }
}

export default Form;