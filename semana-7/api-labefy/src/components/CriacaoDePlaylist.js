import React from 'react';
import styled from 'styled-components';


const ContainerBusca = styled.div`
width: 40%;
min-height: 20%;
display: flex;
flex-direction: column;
background-color: gray;
border-radius: 10px;
input{
    border-radius: 10px;
    margin: 8px;
    border: 1px solid black;
    padding: 8px;
}
button{
    background-color: blue;
    color: white;
    border: none;
    margin: 8px auto;
    width: 40%;
    border-radius: 10px;
    height: 30px;
}`

const DisposicaoDosBotoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        background-color: blue;
        color: white;
        border: none;
        margin: 8px auto;
        width: 40%;
        border-radius: 10px;
        min-height: 50px;
}`

export default class CriacaoDePlaylist extends React.Component {
    
    render() {
        return (

            <ContainerBusca>
                
                <input
                    placeholder="Insira o nome da playlist a ser criada"
                    value={this.props.playlistASerCriada}
                    onChange= {this.props.onChangeInputBusca} 
                    />
                <DisposicaoDosBotoes>
                    <button onClick={() => this.props.onClickCriarPlaylist()}>Criar Playlist</button>
                    <button onClick={() => this.props.trocarPagina(2)}>Ir para a lista de playlists</button>
                </DisposicaoDosBotoes>
            </ContainerBusca>

        )
    }
}
