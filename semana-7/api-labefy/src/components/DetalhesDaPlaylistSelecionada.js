import React from 'react';
import styled from 'styled-components';

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
    }
`
// const BotaoDeExcluirPlaylist = styled.div`
// button{
//     width: 30%;
//     padding: 8px;
//     background-color: transparent;
//     border: none;
//     color: red;
//     font-size: 18px;
//     align-items: center;
// }
// `

const ContainerDasPlaylists = styled.div`
    width: 60%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 10px;
    align-items: center;
    padding: 12px;
    h3{
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
        width: 40%;
        border-radius: 10px;
        min-height: 50px;
    }
    button{
        background-color: blue;
        color: white;
        border: none;
        margin: 8px auto;
        width: 40%;
        border-radius: 10px;
        min-height: 50px;
    }
`

const ItemDaLista = styled.div`
    min-height: 100%;
    width: 90%;
    min-height: 50px;
    display: flex;
    /* flex-direction: column; */
    text-align: center;
    align-items: center;
    justify-content: space-between;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: black;
    background-color: white;
    padding: 12px;
    box-sizing: border-box;
    p{
        text-align: left;
        padding: 8px 12px;
    }
    button {
        border: 1px solid red;
        width: 70%;
        padding: 8px;
        background-color: red;
        color: white;
        font-size: 18px;
        text-align: center;
        margin: 12px auto;
    }
`;

const TituloDaPagina = styled.div`
    width: 90%;
    background-color: white;
`

const HeaderDaLista = styled.div`
min-height: 100px;
text-align: center;
background-color: white;
width: 90%;
justify-content: center;
border: solid black;
border-width: 1px 0 1px 0;
`

const BotaoDeSalvarNovaPlaylist = styled.div`
background-color: blue;`

const DisposicaoDosInputs = styled.div`
display: flex;
flex-direction: column;
width: 100%;

input{
    text-align: left;

}
`


export default class DetalhesDaPlaylistSelecionada extends React.Component {
    render() {

        const playlistSelecionada = this.props.playlistSelecionada.tracks.map((playlist) => {
            console.log("isso chegou aqui", playlist)

            return (

                    <ItemDaLista>
                        <h5>#{this.props.playlistSelecionada.tracks.findIndex(x => x.name === playlist.name)}
                        
                        º Musica</h5>
                        <div>
                            <p><strong>Artista:</strong> {playlist.artist}</p>
                            <p><strong>Nome da Música:</strong> {playlist.name}</p>
                            <p><strong>Link:</strong> {playlist.url}</p>
                        </div>

                        <div>

                            {/* <BotaoDeSalvarNovaPlaylist>
                                <button onClick={() => this.props.editarUsuario(user)}>Editar Usuário</button>
                            </BotaoDeSalvarNovaPlaylist> */}

                            <button onClick={() => this.props.removerPlaylist(playlist)}>Remover Música {this.props.playlistSelecionada.name}</button>

                        </div>

                    </ItemDaLista>

            );
            })

            const headerDaPlaylist = this.props.playlistSelecionada.map((playlist) => {
                console.log("isso chegou aqui header", playlist)
    
                return (
    
                        <HeaderDaLista>

                            <h4>{playlist.name}</h4>
    
                        </HeaderDaLista>
    
                );
                })

        return (
            <ContainerDasPlaylists>

                <TituloDaPagina>
                    <h3>Dados da Playlist Selecionada:</h3>
                </TituloDaPagina>

                {headerDaPlaylist}
                {playlistSelecionada}

                <DisposicaoDosInputs>
                    <input
                        placeholder= "Insira os termos da busca"
                        value={this.props.busca}
                        onChange={this.props.onChangeInputBusca}
                        />
                </DisposicaoDosInputs>

                <BotaoDeExclusao>
                    <button onClick = {() => this.props.trocarPagina(2)}>Voltar à lista de playlists</button>
                </BotaoDeExclusao>


            </ContainerDasPlaylists>
        )
    }
}
