import React from "react";
import styled from "styled-components";

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-width: 100vw;
background-color: darkgray;
min-height: 100vh;
`;

const Botao = styled.div`
width: 100%;
height: 50px;
padding: 8px 12px;
button{
    background-color: darkblue;
    color: white;
    border-radius: 25px;
    padding: 8px;
}`;

const ItensDaLista = styled.div`
width: 90%;
height: 50px;
display: flex;
text-align: center;
align-items: center;
justify-content: space-between;
border-width: 0 0 2px 0;
border-style: solid;
border-color: black;
background-color: white;
padding: 12px;
`;

const BotaoDeExcluirUsuario = styled.div`
button{
    width: 30%;
    padding: 8px;
    background-color: transparent;
    border: none;
    color: red;
    font-size: 18px;
    align-items: center;
}
`

const NomeDoUsuario = styled.div`
    width: 70%;
    text-align: left;
    font-size: 18px;
`

const ListaContainer = styled.div`
    width: 40%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px;
    background-color: white;

    input{
        width: 90%;
        min-height: 20px;
        margin: 12px auto;
        
    }
`

export default class ListaDeUsuarios extends React.Component {
    render() {

        const listaDeUsuariosCadastrados = this.props.listaDeUsuarios.filter((user) =>{
            return user.name.toLowerCase().includes(this.props.busca.toLowerCase())
        }).map((user) => {
            return (

                    <ItensDaLista>

                        <NomeDoUsuario onClick={() => this.props.telaDoUsuarioSelecionado(user)}>
                            <p>{user.name}</p>
                        </NomeDoUsuario>

                        <BotaoDeExcluirUsuario>
                            <button onClick={() => this.props.removerUsuario(user)}>X</button>
                        </BotaoDeExcluirUsuario>

                    </ItensDaLista>

            );

            })

        return (
            <Body>

                <Botao>

                <button onClick = {() => this.props.botaoDeNavegacao(1)}>Voltar ?? p??gina de cadastro</button>

                </Botao>

                <ListaContainer>

                    <h1>Usu??rios Cadastrados:</h1>

                    <input
                    placeholder= "Insira os termos da busca"
                    value={this.props.busca}
                    onChange={this.props.onChangeInputBusca}
                    />

                    {listaDeUsuariosCadastrados}

                </ListaContainer>
                
            </Body>
        )
    }
}