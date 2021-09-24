import styled from 'styled-components';
import React from 'react';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import UsuarioSelecionado from './components/UsuarioSelecionado';
import MainPage from './components/MainPage'
import axios from 'axios';

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
`;

export default class App extends React.Component {
  state = {

    listaDeUsuarios: [
    ],

    usuarioEscolhido: [
    ],

    inputNome: '',
    inputEmail: '',

    paginaAtual: 1,

  };

  buscarListaDeUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers:{
          "Authorization": 'allan-gilber-maryam'
        }

      }).then((usuarios) => {

        const novaLista = usuarios.data.map((user) => {
          return user
        })

        this.setState ({ listaDeUsuarios: novaLista})

      }).catch((error) => {
        alert(error)
      })
  };

  // listaComDemaisInformacoes = () =>{
  //   const idsASeremUsadas = this.state.listaDeUsuarios.map((usuario) =>{
  //     return usuario.id
  //   })

  //   const teste = []

  //   const novaLista = idsASeremUsadas.map((usuario) =>{
  //     const pegarDadosDoUsusario = async () => {
  //       const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario}`, {
  //       headers:{
  //         "Authorization": 'allan-gilber-maryam'
  //       }
  //     })
  //     return response
  //   }

  //     this.setState({ listaDeUsuarios: teste})
  //   })
  // .then((usuarios) => {

  //   const novaLista = usuarios.data.map((dados) => {
  //     return dados
  //   })

  //   console.log(novaLista)
  //   this.setState ({ listaDeUsuarios: novaLista})

  // }).catch((error) => {
  //   alert(error)
  // })
  // };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value});
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value});
  };

  salvarUsuario = () => {

    const body ={
      name: this.state.inputNome,
      email: this.state.inputEmail,
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then(() => {
      alert("Usuário cadastrado!")
      this.buscarListaDeUsuarios()
    }).catch((error) => {
      alert(error.response.data.message)
    })
    this.setState({ inputNome: '' , inputEmail: ''})
  }

  paginaDePreenchimento = () => {
    switch(this.state.paginaAtual){
      case 1: return (
        <MainPage
          listaDeUsuarios = {this.state.listaDeUsuarios}
          inputNome = {this.state.inputNome}
          inputEmail = {this.state.inputEmail}
          botaoDeNavegacao = {this.botaoDeNavegacao}
          onChangeInputEmail = {this.onChangeInputEmail}
          onChangeInputNome = {this.onChangeInputNome}
          salvarUsuario = {this.salvarUsuario}
          removerUsuario = {this.removerUsuario}
        />
      );
      case 2: return (
        <ListaDeUsuarios
          listaDeUsuarios = {this.state.listaDeUsuarios}
          inputNome = {this.state.inputNome}
          inputEmail = {this.state.inputEmail}
          botaoDeNavegacao = {this.botaoDeNavegacao}
          removerUsuario = {this.removerUsuario}
          telaDoUsuarioSelecionado = {this.telaDoUsuarioSelecionado}
        />
      );
      case 3: return(
        <UsuarioSelecionado
        usuarioEscolhido = {this.state.usuarioEscolhido}
        listaDeUsuarios = {this.state.listaDeUsuarios}
        removerUsuario = {this.removerUsuario}
        botaoDeNavegacao = {this.botaoDeNavegacao}
        telaDoUsuarioSelecionado = {this.telaDoUsuarioSelecionado}/>
      )
    }
  };

  botaoDeNavegacao = () => {

    if (this.state.paginaAtual === 1){
      this.setState({ paginaAtual: this.state.paginaAtual + 1 })
    } else{
      this.setState({ paginaAtual: this.state.paginaAtual - 1 })
    }

  };

  retirarUsuarioDoServidor = (id) => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id

    axios.delete( url, {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then(() => {
      alert("Usuário removido!")
      this.buscarListaDeUsuarios()
    }).catch((error) => {
      alert(error)
    })
  }

  removerUsuario = (user) => {
        
    if(window.confirm(`Tem certeza que você deseja remover o usuário ${user.name}?`)){

      const usuarioASerRemovido = this.state.listaDeUsuarios.filter((elemento) => {
        if (user.id === elemento.id){
          return elemento.id
        } else {
          return false
        }
      })

      const idDoUsuarioASerRemovido = usuarioASerRemovido.map((elemento) => {
        return elemento.id
      })

      this.retirarUsuarioDoServidor(idDoUsuarioASerRemovido)
    } else{
      alert("Ação cancelada!")
    }
  }

  componentDidMount(){
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then((response) => {
      this.setState({ listaDeUsuarios: response.data })
    }).catch((error) => {
      alert(error.response.data)
    })
  }

  componentDidUpdate = (prevProps, prevState) => {

    if (this.state.listaDeUsuarios.length !== prevState.listaDeUsuarios.length){
      this.buscarListaDeUsuarios()
    }
    // else if (this.state.usuarioEscolhido.length !== prevState.usuarioEscolhido.length){
    //   this.telaDoUsuarioSelecionado()
    // }

  };

  pegarDadosDoUsuario =  async (user) => {
    const response =  await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    })
      return response.data 
    }

  telaDoUsuarioSelecionado = async (user) =>{

    
    const teste = await this.pegarDadosDoUsuario(user)
    

    console.log("este daqui 21312", teste)
    this.setState({ usuarioEscolhido: [ teste ] })

    this.setState({ paginaAtual: 3 })
  } 

  render() {

    return (
      <Body>

        {this.paginaDePreenchimento()}

      </Body>
    )
  }
}
