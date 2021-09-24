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

const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    div{
        border-width: 0 0 2px 0;
        border-style: solid;
        border-color: black;
    }
`

const ItensDaLista = styled.div`
    width: 90%;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
    background-color: white;
    padding: 12px;
    div {
        width: 100%;
        display: flex;
        justify-content: left;
    }
    div > p{
        width: 100%;
        text-align: left;
        font-size: 18px;
    }
    h1{
        text-align: center;
        justify-content: center;
        width: auto;
        margin: auto;
}`

const BotaoDeExclusao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    button {
        border: 1px solid red;
        width: 70%;
        padding: 8px;
        background-color: red;
        color: white;
        font-size: 18px;
        text-align: center;
        margin: 12px auto;
    }`

const ListaContainer = styled.div`
    width: 40%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px;
    background-color: white;
    min-height: 500px;
`

const BotaoDeEdicao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    button {
        border: 1px solid blue;
        width: 70%;
        padding: 8px;
        background-color: blue;
        color: white;
        font-size: 18px;
        text-align: center;
        margin: 12px auto;
    }
`

export default class PaginaDoUsuarioSelecionado extends React.Component {

    render() {

        const usuarioSelecionado = this.props.usuarioEscolhido.map((user) => {
            return (

                    <ItensDaLista>

                        <ContainerPrincipal>
                            <div>
                                <h1>Dados do Usuário Selecionado:</h1>
                            </div>

                            <div>
                                <p><strong>Nome:</strong> {user.name}</p>
                            </div>

                            <div>
                                <p><strong>Email:</strong> {user.email}</p>
                            </div>
                        </ContainerPrincipal>

                        <div>
                        
                            <BotaoDeEdicao>
                                <button onClick={() => this.props.editarUsuario(user)}>Editar Usuário</button>
                            </BotaoDeEdicao>

                            <BotaoDeExclusao>
                                <button onClick={() => this.props.removerUsuario(user)}>Deletar o usuário {this.props.usuarioEscolhido.name}</button>
                            </BotaoDeExclusao>

                        </div>


                    </ItensDaLista>

            );
            })

        return (
            <Body>

                <Botao>

                <button onClick = {() => this.props.botaoDeNavegacao(2)}>Voltar à página com a lista de usuários</button>

                </Botao>

                <ListaContainer>

                    {usuarioSelecionado}

                </ListaContainer>
                
            </Body>
        )
    }
}