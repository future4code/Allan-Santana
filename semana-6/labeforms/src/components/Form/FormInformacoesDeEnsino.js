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
align-items: center;`

class FormInformacoesDeEnsino extends React.Component {

  state = {

    motivoApresentado: "",
    cursoComplementar:"",

  };

  onChangeInputMotivoApresentado = (event)=>{

    this.setState({motivoApresentado: event.target.value})

  };

  onChangeInputCursoComplementar = (event)=>{

    this.setState({cursoComplementar: event.target.value})

  }

  render() {

    return <OrganizacaoDosElementos>

      <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

      <FormDisposition>

        <label> 5. Por que você não terminou um curso de graduação?</label>

        <input

              value={this.state.motivoApresentado}

              onChange={this.onChangeInputMotivoApresentado}
              placeholder={"Informe o motivo."}
        />

      </FormDisposition>
      <FormDisposition>

        <label for="escolaridade">6. Você fez algum curso complementar?</label>

        <select name="escolaridade" id="escolaridade">

          <option value={this.state.cursoComplementar}>Nenhum</option>
          <option value={this.state.cursoComplementar}>Curso Técnico</option>
          <option value={this.state.cursoComplementar}>Curso de Inglês</option>

        </select> 

      </FormDisposition>

    </OrganizacaoDosElementos>
  }
}

export default FormInformacoesDeEnsino;