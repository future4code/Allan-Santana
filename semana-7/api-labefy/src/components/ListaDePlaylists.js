import React from 'react';
import styled from 'styled-components';

const ContainerDasPlaylists = styled.div`
    box-sizing: border-box;
    width: 40%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 10px;
    align-items: center;
    padding: 12px;
    h3{
        border: solid black;
        border-width: 0 0 2px 0;
        background-color: white;
        text-align: center;
        justify-content: center;
        width: 90%;
        padding: 16px 0;
        margin: 0;
    }
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
        padding: 8px auto;
        min-height: 50px;
        border-radius: 10px;
        text-align: center;
        width: 40%;
    }
`

const ItemDaLista = styled.div`
    box-sizing: border-box;
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

const NomeDaPlaylist = styled.div`
    width: 70%;
    text-align: left;
    font-size: 18px;`

const BotaoDeExcluirPlaylist = styled.div`
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

export default class ListaDePlaylists extends React.Component {

    render() {

        const listaDePlaylists = this.props.listaDePlaylists.map((playlist) => {
            return (

                <ItemDaLista>

                    <NomeDaPlaylist onClick={() => this.props.telaDaPlaylistSelecionada(playlist)}>
                        <p>{playlist.name}</p>
                    </NomeDaPlaylist>

                    <BotaoDeExcluirPlaylist>
                        <button onClick={() => this.props.removerPlaylist(playlist)}>X</button>
                    </BotaoDeExcluirPlaylist>

                </ItemDaLista>

            );
        })

        return (
            <ContainerDasPlaylists>

                <h3>Playlists existentes:</h3>

                {listaDePlaylists}
                <button onClick={() => this.props.trocarPagina(1)}>Voltar para a criação de playlists</button>

            </ContainerDasPlaylists>
        )
    }
}
