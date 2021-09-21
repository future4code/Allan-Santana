import styled from 'styled-components';
import React from 'react';

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
/* height: 100vh; */
`;

const FormContainer = styled.div`
width: 20%;
height: 25%;
min-height: 200px;
min-width: 250px;
border: 1px solid black;
display: flex;
flex-direction: column;
/* justify-content: ; */
align-items: center;
margin: 20px auto;
/* padding: 20px 12px; */`;

const Forms = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
width: 80%;
height: 70%;
margin: 12px 0;`;

const Botao = styled.div`
width: 100%;
height: 50px;
padding: 8px 12px;
button{
  padding: 8px;
}`;


export default class App extends React.Component {
  render() {

    return (
      <Body>

        <Botao>

          <button onClick = {this.props.botaoDeNavegacao}>Ir para a lista de usuarios cadastrados</button>

        </Botao>

        <FormContainer>

          <Forms>
            <p>Nome:</p>
            <input 
            value={this.props.inputNome}
            onChange= {this.props.onChangeInputNome} 
            />

            <p>E-mail:</p>
            <input
            value={this.props.inputEmail}
            onChange= {this.props.onChangeInputEmail}
            />
          </Forms>

          <button onClick={this.props.salvarUsuario}>Salvar</button>

        </FormContainer>

      </Body>
    )
  }
}
