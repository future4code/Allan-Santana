import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import CriacaoDePlaylist from './components/CriacaoDePlaylist';
import ListaDePlaylists from './components/ListaDePlaylists';
import DetalhesDaPlaylistSelecionada from './components/DetalhesDaPlaylistSelecionada';

const ContainerPrincipal = styled.div`
background-color: #202124;
min-height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
align-items: center;`

export default class App extends React.Component {

  state = {

    playlistASerCriada:'',
    listaDePlaylists: '',
    numeroDaPagina: 1,
    playlistSelecionada: null,
    inputNomeDaMusica: '',
    inputNomeDoArtistaOuBanda: '',
    inputLinkDoArquivoDeAudio:'',

};

onChangeInputNomeDaMusica = (event) => {
  this.setState({ inputNomeDaMusica: event.target.value});
};

onChangeInputNomeDoArtistaOuBanda = (event) => {
  this.setState({ inputNomeDoArtistaOuBanda: event.target.value});
};

onChangeInputLinkDoArquivoDeAudio = (event) => {
  this.setState({ inputLinkDoArquivoDeAudio: event.target.value});
};

onChangeInputBusca = (event) => {
this.setState({ playlistASerCriada: event.target.value});
};

componentDidUpdate = (prevProps, prevState) => {

    if (this.state.listaDePlaylists.length !== prevState.listaDePlaylists.length){
      this.buscarListaDePlaylists()
    }

    if (this.state.numeroDaPagina !== prevState.numeroDaPagina){
      this.paginaAtual()
    }

  };

  salvarNovaMusica = () => {
    const body = {
      name: this.state.inputNomeDaMusica,
      artist: this.state.inputNomeDoArtistaOuBanda,
      url: this.state.inputLinkDoArquivoDeAudio,
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada[0].id}/tracks`, body, {
      headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) =>{
      this.setState({ inputNomeDaMusica: ''})
      this.setState({ inputNomeDoArtistaOuBanda: ''})
      this.setState({ inputLinkDoArquivoDeAudio: ''})
      this.telaDaPlaylistSelecionada(this.state.playlistSelecionada[0])

    }).catch((error) =>{
      alert(error)
    })

  }

  buscarListaDePlaylists = () =>{

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
        headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) => {
        let playlistsRecebidas = response.data.result.list.map((playlist) => {
                return playlist
        })
        this.setState({listaDePlaylists: playlistsRecebidas})
        }).catch((error) => {
        alert(error)
        })
    };

    removerPlaylist = (playlist) => {

      if(window.confirm(`Tem certeza que você deseja remover a playlist ${playlist.name}?`)){
  
        const playlistASerRemovida = this.state.listaDePlaylists.filter((elemento) => {
          if (playlist.id === elemento.id){
            return elemento.id
          } else {
            return false
          }
        })
  
        const idDaPlaylistASerRemovida = playlistASerRemovida.map((elemento) => {
          return elemento.id
        })
  
        this.retirarPlaylistDoServidor(idDaPlaylistASerRemovida)
      } else{
        alert("Ação cancelada!")
      }
    }

    removeTrack = (musica) => {

      if(window.confirm(`Tem certeza que você deseja remover a música ${musica.name}?`)){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada[0].id}/tracks/${musica.id}`, {
        headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) => {
        this.telaDaPlaylistSelecionada(this.state.playlistSelecionada[0])
        }).catch((error) => {
        alert(error)
        })
      } else{
        alert("Ação cancelada!")
      }
    }

    retirarPlaylistDoServidor = (id) => {

      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/' + id
  
      axios.delete( url, {
        headers:{
          "Authorization": 'allan-gilber-maryam'
        }
      }).then(() => {
        alert("Playlist removida!")
        this.buscarListaDePlaylists()
      }).catch((error) => {
        alert(error)
      })
    }


    onClickCriarPlaylist = () =>{

      const body = {
          name: this.state.playlistASerCriada
      }

      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
          headers: {
          Authorization: "allan-gilber-maryam"
          }
      }).then((response) => {
        alert("Playlist criada!")
        this.setState({ playlistASerCriada: '' })
        this.buscarListaDePlaylists()

      }).catch((error) => {
      alert( error.response.data.message)
      })
    };

  componentDidMount = () =>{

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
        headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) => {
        let playlistsRecebidas = response.data.result.list.map((playlist) => {
                return playlist
        })
        this.setState({listaDePlaylists: playlistsRecebidas})
        }).catch((error) => {
        alert(error)
        })
    };

    trocarPagina = (pagina)=>{
      this.setState({ numeroDaPagina: pagina})
    };

    telaDaPlaylistSelecionada = async (playlist) =>{

      const dadosDaPlaylist = await this.pegarDadosDaPlaylist(playlist)
      this.setState({ playlistSelecionada: dadosDaPlaylist })

      this.setState({ numeroDaPagina: 3 })
    } 

    pegarDadosDaPlaylist =  async (playlist) => {
      const response =  await axios.all([
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${playlist.name}`, {
          headers:{
            "Authorization": 'allan-gilber-maryam'
          }
        }),
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, {
          headers:{
            "Authorization": 'allan-gilber-maryam'
          }
        })
      ]).then(axios.spread((response1, response2) => {
        let responseResult = response1.data.result.playlist
        responseResult.tracks = response2.data.result.tracks
        let resultadoFinal = responseResult
        return resultadoFinal
      }))
        return response
      }

      posicaoDaMusica = (musica) =>{

        let index = this.state.playlistSelecionada.tracks.findIndex(x => x.name === musica.name)

        return index + 1



      };

    paginaAtual = () => {
      switch(this.state.numeroDaPagina){
        case 1: return(
          <CriacaoDePlaylist
          onClickCriarPlaylist = {this.onClickCriarPlaylist}
          buscarListaDePlaylists = {this.buscarListaDePlaylists}
          onChangeInputBusca = {this.onChangeInputBusca}
          playlistASerCriada = {this.state.playlistASerCriada}
          listaDePlaylists = {this.state.listaDePlaylists}
          numeroDaPagina = {this.state.numeroDaPagina}
          paginaAtual = {this.paginaAtual}
          trocarPagina = {this.trocarPagina}
          />
          );
          case 2: return(
            <ListaDePlaylists
            onClickCriarPlaylist = {this.onClickCriarPlaylist}
            buscarListaDePlaylists = {this.buscarListaDePlaylists}
            onChangeInputBusca = {this.onChangeInputBusca}
            playlistASerCriada = {this.state.playlistASerCriada}
            listaDePlaylists = {this.state.listaDePlaylists}
            numeroDaPagina = {this.state.numeroDaPagina}
            paginaAtual = {this.paginaAtual}
            trocarPagina = {this.trocarPagina}
            telaDaPlaylistSelecionada = {this.telaDaPlaylistSelecionada}
            removerPlaylist = {this.removerPlaylist}
            />
        );
        case 3: return (
          <DetalhesDaPlaylistSelecionada
          removerPlaylist = {this.removerPlaylist}
          playlistSelecionada = {this.state.playlistSelecionada}
          trocarPagina = {this.trocarPagina}
          inputNomeDaMusica= {this.state.inputNomeDaMusica}
          inputNomeDoArtistaOuBanda={this.state.inputNomeDoArtistaOuBanda}
          inputLinkDoArquivoDeAudio={this.state.inputLinkDoArquivoDeAudio}
          onChangeInputNomeDaMusica = {this.onChangeInputNomeDaMusica}
          onChangeInputNomeDoArtistaOuBanda = {this.onChangeInputNomeDoArtistaOuBanda}
          onChangeInputLinkDoArquivoDeAudio = {this.onChangeInputLinkDoArquivoDeAudio}
          salvarNovaMusica = {this.salvarNovaMusica}
          removeTrack = {this.removeTrack}
          posicaoDaMusica = {this.posicaoDaMusica}/>
        );
      }
    }

  render() {

    return (
      <ContainerPrincipal>

        {this.paginaAtual()}

      </ContainerPrincipal>
    )
  }
}
