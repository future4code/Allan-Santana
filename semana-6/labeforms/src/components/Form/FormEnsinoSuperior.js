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


class FormEnsinoSuperior extends React.Component {

  state = {

    nomeDoCurso: "",
    unidadeDeEnsino:""

  };

  onChangeInputNomeDoCurso = (event)=>{

    this.setState({nomeDoCurso: event.target.value})

  };

  onChangeInputUnidadeDeEnsino = (event)=>{

    this.setState({unidadeDeEnsino: event.target.value})

  }

  render() {

    return <OrganizacaoDosElementos>

      <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

      <FormDisposition>

        <label>5. Qual curso?</label>

        <input

              value={this.state.nomeDoCurso}

              onChange={this.onChangeInputNomeDoCurso}
              placeholder={"Informe o nome do curso."}
        />

      </FormDisposition>
      <FormDisposition>

        <label>6. Qual a unidade de ensino?</label>

        <input

        value={this.state.unidadeDeEnsino}

        onChange={this.onChangeInputUnidadeDeEnsino}
        placeholder={"Informe a unidade de ensino."}
        />

      </FormDisposition>

    </OrganizacaoDosElementos>
  }
}

export default FormEnsinoSuperior;