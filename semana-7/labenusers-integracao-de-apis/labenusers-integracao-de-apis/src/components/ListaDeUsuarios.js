import React from "react";
import styled from "styled-components";

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
/* height: 100vh; */
`;

const Botao = styled.div`
width: 100%;
height: 50px;
padding: 8px 12px;
button{
    padding: 8px;
}`;

const ItensDaLista = styled.div`
width: 100%;
height: 50px;
/* padding: 8px 12px; */
display: flex;
text-align: center;
align-items: center;
border-width: 0 0 2px 0;
border-style: solid;
border-color: black;
p{
    width: 70%;
    text-align: left;
    font-size: 18px;
}
button{
    width: 30%;
    padding: 8px;
    background-color: transparent;
    border: none;
    color: red;
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
}`;

const ListaContainer = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default class ListaDeUsuarios extends React.Component {
    render() {

        const listaDeUsuariosCadastrados = this.props.listaDeUsuarios.map((user) => {
            console.log(user)
            return (

                    <ItensDaLista>

                        <p>{user.name}</p>
                        <button onClick={() => this.props.removerUsuario(user.id)}>X</button>

                    </ItensDaLista>

            );

            })

        return (
            <Body>

                <Botao>

                <button onClick = {this.props.botaoDeNavegacao}>Voltar à página de cadastro</button>

                </Botao>

                <ListaContainer>

                    <h1>Usuários Cadastrados:</h1>

                    {listaDeUsuariosCadastrados}

                </ListaContainer>
                
            </Body>
        )
    }
}