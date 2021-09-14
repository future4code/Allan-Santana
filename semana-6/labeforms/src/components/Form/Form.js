import React from 'react';
import styled from 'styled-components';


const OrganizacaoDosElementos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px;
width: 40%;
text-align: center;

label{
  margin-bottom: 12px;
}
select{
  margin-bottom: 12px;
  display: flex;
  text-align: center;
  padding: 2px;
}
`
const FormDisposition = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Form extends React.Component {

  state = {

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

  onChangeInputEmailDoUsuario = (event)=>{

    this.setState({emailDoUsuario: event.target.value})

  }

  onChangeInputescolaridadeDoUsuario = (event)=>{

    this.setState({escolaridadeDoUsuario: event.target.value})

  }

  render() {

    return <OrganizacaoDosElementos>

      <h3>ETAPA 1 - DADOS GERAIS</h3>

      <FormDisposition>

        <label>1. Qual o seu nome?</label>

        <input

              value={this.state.nomeDoUsuario}

              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Seu nome completo."}
        />

      </FormDisposition>
      <FormDisposition>

        <label>2. Qual a sua idade?</label>

        <input

        value={this.state.idadeDoUsuario}

        onChange={this.onChangeInputIdadeDoUsuario}
        placeholder={"Informe sua idade."}
        />

      </FormDisposition>
      <FormDisposition>
        <label>3. Qual seu e-mail?</label>

        <input

        value={this.state.emailDoUsuario}

        onChange={this.onChangeInputEmailDoUsuario}
        placeholder={"Informe seu e-mail."}
        />

      </FormDisposition>
      <FormDisposition>

        <label for="escolaridade">4. Qual a sua escolaridade?</label>

        <select name="escolaridade" id="escolaridade">
          <option value={this.state.escolaridadeDoUsuario}>Ensino Médio Incompleto</option>
          <option value={this.state.escolaridadeDoUsuario}>Ensino Médio Completo</option>
          <option value={this.state.escolaridadeDoUsuario}>Ensino Superior Incompleto</option>
          <option value={this.state.escolaridadeDoUsuario}>Ensino Superior Completo</option>
        </select> 

      </FormDisposition>

    </OrganizacaoDosElementos>
  }
}

export default Form;