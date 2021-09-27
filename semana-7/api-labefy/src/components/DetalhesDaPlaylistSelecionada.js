import React from 'react';
import styled from 'styled-components';

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
`

const BotaoDePlayOuPause =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`

const ContainerDasPlaylists = styled.div`
    box-sizing: border-box;
    width: 60%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 10px;
    align-items: center;
    padding: 12px;
    h2{
        background-color: white;
        text-align: center;
        justify-content: center;
        width: 90%;
        padding: 16px 0;
        margin: 0;
    }
    button{
        background-color: blue;
        color: white;
        border: none;
        padding: 8px auto;
        min-height: 50px;
        border-radius: 10px;
        text-align: center;
        width: 40%;
    }
`

const ContainerDoItemDaLista = styled.div`
    min-height: 300px;
    width: 90%;
    display: flex;
    flex-direction: column;
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
    audio{
        width: 70%;
        padding: 8px;
        margin: 12px auto;
        max-width: 500px;
    }
`;

const DescricaoDaTrack = styled.div`
display: flex;
justify-content: space-between;
height: 100%;
width: 100%;
h3 {
    background-color: black;
    color: white;
    border: solid black;
    border-width: 0 2px 0 0;
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
    max-height: 50px;
    max-width: 70px;
    }
`;

const ContainerDaLista = styled.div`
    width: 85%;
    align-items: center;
    justify-content: center;
    border: solid black;
    border-width: 1px;
`

const TituloDaPagina = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    background-color: white;
    margin: 0;
`

const HeaderDaLista = styled.div`
display: flex;
min-height: 100px;
text-align: center;
background-color: white;
width: 90%;
justify-content: center;
border: solid black;
margin: 0;
border-width: 2px 0 2px 0;
align-items: center;
`

const DisposicaoGeralDosInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`
const DisposicaoIndividualDosInputs = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    padding: 18px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border: solid black;
    border-width: 0 0 2px 0;
    
    label {
        width: 25%;
        display: block;
        text-align: justify;
        padding: 12px;
    }
    input{
    width: 65%;
    display: block;
    box-sizing: border-box;
    text-align: left;
    border-radius: 10px;
    border: 1px solid black;
    padding: 8px;
    align-items: center;
    }
`


export default class DetalhesDaPlaylistSelecionada extends React.Component {
    render() {

        const playlistSelecionada = this.props.playlistSelecionada.tracks.map((musica) => {

            if(musica){
            return (

                    <ContainerDoItemDaLista>
                        <DescricaoDaTrack>
                            <h3>#{this.props.posicaoDaMusica(musica)}º Musica</h3>
                            <ContainerDaLista>
                                <p><strong>Artista:</strong> {musica.artist}</p>
                                <p><strong>Nome da Música:</strong> {musica.name}</p>
                                <p><strong>Link:</strong> {musica.url}</p>
                            </ContainerDaLista>
                        </DescricaoDaTrack>

                        <BotaoDePlayOuPause>
                            <audio controls>
                                <source src={musica.url}/>
                            </audio>
                        </BotaoDePlayOuPause>

                        <button onClick={() => this.props.removeTrack(musica)}>Remover Música</button>

                    </ContainerDoItemDaLista>

            )} else{
                return (
                    <ContainerDoItemDaLista>
                        <h1>A Playlista selecionadas não possui músicas.</h1>
                    </ContainerDoItemDaLista>
                )
            }
            })

            const headerDaPlaylist = this.props.playlistSelecionada.map((playlist) => {
    
                return (
    
                        <HeaderDaLista>

                            <h3>{playlist.name}</h3>
    
                        </HeaderDaLista>
    
                );
                })

        return (
            <ContainerDasPlaylists>

                <TituloDaPagina>
                    <h2>Dados da Playlist Selecionada:</h2>
                </TituloDaPagina>

                {headerDaPlaylist}
                {playlistSelecionada}

                <DisposicaoGeralDosInputs>
                    <DisposicaoIndividualDosInputs>
                        <label><strong>Insira o nome da música:</strong></label>
                        <input
                            placeholder= "Insira o nome da música"
                            value={this.props.inputNomeDaMusica}
                            onChange={this.props.onChangeInputNomeDaMusica}
                            />
                    </DisposicaoIndividualDosInputs>
                    <DisposicaoIndividualDosInputs>
                        <label><strong>Insira o nome do Artista ou Banda:</strong></label>
                        <input
                            placeholder= "Insira o nome do artista"
                            value={this.props.inputNomeDoArtistaOuBanda}
                            onChange={this.props.onChangeInputNomeDoArtistaOuBanda}
                            />
                    </DisposicaoIndividualDosInputs>
                    <DisposicaoIndividualDosInputs>
                        <label><strong>Insira a URL com o arquivo de áudio:</strong></label>
                        <input
                            placeholder= "Insira o link com o arquivo de áudio"
                            value={this.props.inputLinkDoArquivoDeAudio}
                            onChange={this.props.onChangeInputLinkDoArquivoDeAudio}
                            />
                    </DisposicaoIndividualDosInputs>

                    <Botoes>
                        <button onClick = {() => this.props.salvarNovaMusica()}>Adicionar nova música à playlist</button>
                        <button onClick = {() => this.props.trocarPagina(2)}>Voltar à lista de playlists</button>
                    </Botoes>

                </DisposicaoGeralDosInputs>

            </ContainerDasPlaylists>
        )
    }
}
