import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import CriacaoDePlaylist from './components/CriacaoDePlaylist';
import ListaDePlaylists from './components/ListaDePlaylists';
import DetalhesDaPlaylistSelecionada from './components/DetalhesDaPlaylistSelecionada';

const ContainerPrincipal = styled.div`
background-color: #202124;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;`

export default class App extends React.Component {

  state = {

    playlistASerCriada:'',
    listaDePlaylists: '',
    numeroDaPagina: 1,
    playlistSelecionada: null,

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

  buscarListaDePlaylists = () =>{

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
        headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) => {
        console.log(response.data.result.list)
        let playlistsRecebidas = response.data.result.list.map((playlist) => {
                return playlist
        })
        this.setState({listaDePlaylists: playlistsRecebidas})
        console.log("este", this.state.listaDePlaylists)
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

    // removeTrack = (music) => {

    //   if(window.confirm(`Tem certeza que você deseja remover a música ${music.name}?`)){
  
    //     const idDaPlaylistASerRemovida = this.state.listaDePlaylists.filter((elemento) => {
    //       if (playlist.id === elemento.id){
    //         return elemento.id
    //       } else {
    //         return false
    //       }
    //     })
  
    //     const idDaPlaylistASerRemovida = playlistASerRemovida.map((elemento) => {
    //       return elemento.id
    //     })
  
    //     this.retirarPlaylistDoServidor(idDaPlaylistASerRemovida)
    //   } else{
    //     alert("Ação cancelada!")
    //   }
    // }

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

        console.log(response)
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
        console.log(response.data.result.list)
        let playlistsRecebidas = response.data.result.list.map((playlist) => {
                return playlist
        })
        this.setState({listaDePlaylists: playlistsRecebidas})
        console.log("este", this.state.listaDePlaylists)
        }).catch((error) => {
        alert(error)
        })
    };

    trocarPagina = (pagina)=>{
      this.setState({ numeroDaPagina: pagina})
    };

    telaDaPlaylistSelecionada = async (playlist) =>{

      const dadosDaPlaylist = await this.pegarDadosDaPlaylist(playlist)
      
      console.log("o servidor retornou", dadosDaPlaylist)
      // const newplaylist = playlist
      // const novaPlaylist = [...newplaylist, dadosDaPlaylist ]
      // console.log("esta é o spread", novaPlaylist)
      this.setState({ playlistSelecionada: dadosDaPlaylist })
      console.log("essa é a nova playlist", this.state.playlistSelecionada)

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
        console.log("este daqui21312", response1, "este", response2)
        let responseResult = response1.data.result.playlist
        responseResult.tracks = response2.data.result.tracks
        console.log("primeira resposta", response1.data.result.playlist)
        console.log("segunda resposta", response2.data.result.tracks)
        console.log("spread", responseResult)
        let resultadoFinal = responseResult
        return resultadoFinal
      }))
        return response
      }

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
            />
        );
        case 3: return (
          <DetalhesDaPlaylistSelecionada
          removerPlaylist = {this.removerPlaylist}
          playlistSelecionada = {this.state.playlistSelecionada}
          trocarPagina = {this.trocarPagina}
          />
          
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
