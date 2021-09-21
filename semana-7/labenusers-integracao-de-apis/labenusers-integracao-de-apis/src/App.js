import styled from 'styled-components';
import React from 'react';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import MainPage from './components/MainPage'
import axios from 'axios';

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
/* height: 100vh; */
`;

export default class App extends React.Component {
  state = {

    listaDeUsuarios: [
      {
      }

    ],

    nome: '',
    email: '',

    inputNome: '',
    inputEmail: '',

    paginaAtual: 1,

  };

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
      console.log("entrou1")
      alert("Usuário cadastrado!")
    }).catch((error) => {
      console.log("entrou2")
      console.log(error.response.data.message)
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
        />
      );
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

    console.log(id)
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id

    axios.delete( url, {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then(() => {
      alert("Usuário removido!")
      this.buscarListaDeUsuarios()
    }).catch((error) => {
      console.log(error)
      alert(error)
    })
  }

  buscarListaDeUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers:{
          "Authorization": 'allan-gilber-maryam'
        }
      }).then((usuarios) => {
        console.log("lista de ususarios", usuarios)
        this.setState ({ listaDeUsuarios: usuarios})
      }).catch((error) => {
        console.log("entrou232")
        console.log(error.response.data.message)
        alert(error.response.data.message)
      })
  }

  removerUsuario = (id) => {

    console.log("chegou aqui3123", id)
  
    const usuarioASerRemovido = this.state.listaDeUsuarios.filter((elemento) => {
      if (id === elemento.id){
        return elemento.id
      } else {
        return false
      }
    })

    const idDoUsuarioASerRemovido = usuarioASerRemovido.map((elemento) => {
      return elemento.id
    })

    console.log("este sera removido", idDoUsuarioASerRemovido)
    this.retirarUsuarioDoServidor(idDoUsuarioASerRemovido)

  }

  componentDidMount(){
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then((response) => {
      console.log(response)
      this.setState({ listaDeUsuarios: response.data })
    }).catch((error) => {
      console.log("entrou3")
      alert(error.response.data)
    })
    console.log("este aqui", this.state.listaDeUsuarios)
  }

  // componentDidUpdate = () => {

  //   const dadosArmazenados = {

  //     ...this.state.tarefas

  //   };

  //   console.log(dadosArmazenados)

  //   window.localStorage.setItem("dadosArmazenados", JSON.stringify(dadosArmazenados))

  // };


  render() {

    return (
      <Body>

        {this.paginaDePreenchimento()}

      </Body>
    )
  }
}
