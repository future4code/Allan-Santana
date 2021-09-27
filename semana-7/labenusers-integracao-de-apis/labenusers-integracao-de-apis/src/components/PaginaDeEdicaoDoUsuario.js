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
    justify-content: left;
    div{
        border-width: 0 0 2px 0;
        border-style: solid;
        border-color: black;
    }
    p {
        width: 10%;
        text-align: left;
        font-size: 18px;
    }
    input{
        min-height: 50px;
        width: 70%;
        height: 90%;
        font-size: 18px;
        margin: 4px auto;
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

const BotaoDeSalvamento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    button {
        border: 1px solid #07aced;
        width: 70%;
        padding: 8px;
        background-color: #07aced;
        color: white;
        font-size: 18px;
        text-align: center;
        margin: 12px auto;
        text-shadow: black;
    }
`

export default class PaginaDeEdicaoDoUsuario extends React.Component {


    render() {

        const usuarioSelecionado = this.props.usuarioEscolhido.map((user) => {
            return (

                    <ItensDaLista>

                        <ContainerPrincipal>
                            <div>
                                <h1>Dados do Usuário Selecionado:</h1>
                            </div>

                            <div>
                                <p><strong>Nome:</strong></p> 
                                <input
                                    value={this.props.inputNomeDoUsuarioNaEdicao}
                                    onChange= {this.props.onChangeInputNomeDoUsuarioNaEdicao} 
                                />
                            </div>

                            <div>
                                <p><strong>Email:</strong></p>
                                <input
                                    value={this.props.inputEmailDoUsuarioNaEdicao}
                                    onChange= {this.props.onChangeInputEmailDoUsuarioNaEdicao} 
                                />
                            </div>
                        </ContainerPrincipal>

                        <div>
                        
                            <BotaoDeSalvamento>
                                <button onClick={() => this.props.salvarDadosDoUsuario()}>Salvar Dados</button>
                            </BotaoDeSalvamento>

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

                <button onClick = {() => this.props.botaoDeNavegacao(3)}>Voltar à página dos detalhes do usuário selecionado</button>

                </Botao>

                <ListaContainer>

                    {usuarioSelecionado}

                </ListaContainer>
                
            </Body>
        )
    }
}