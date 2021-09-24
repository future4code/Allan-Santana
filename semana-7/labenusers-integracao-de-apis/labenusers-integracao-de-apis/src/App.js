import styled from 'styled-components';
import React from 'react';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import MainPage from './components/MainPage';
import PaginaDoUsuarioSelecionado from "./components/PaginaDoUsuarioSelecionado";
import PaginaDeEdicaoDoUsuario from "./components/PaginaDeEdicaoDoUsuario";
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
    inputNomeDoUsuarioNaEdicao: '',
    inputEmailDoUsuarioNaEdicao: '',
    busca: '',

    paginaAtual: 1,

  };

  onChangeInputNomeDoUsuarioNaEdicao = (event) => {
    this.setState({ inputNomeDoUsuarioNaEdicao: event.target.value});
  };

  onChangeInputEmailDoUsuarioNaEdicao = (event) => {
      this.setState({ inputEmailDoUsuarioNaEdicao: event.target.value});
  };

  editarUsuario = () => {
    this.setState({ paginaAtual: 4 })
  }

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

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value});
  };

  onChangeInputBusca = (event) => {
    this.setState({ busca: event.target.value});
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value});
  };

  salvarDadosDoUsuario = () => {

    if(((this.state.inputNomeDoUsuarioNaEdicao !== this.state.usuarioEscolhido[0].name) && (this.state.inputEmailDoUsuarioNaEdicao !== this.state.usuarioEscolhido[0].email)) && (this.state.inputEmailDoUsuarioNaEdicao && this.state.inputNomeDoUsuarioNaEdicao)){

    const body ={
      name: this.state.inputNomeDoUsuarioNaEdicao,
      email: this.state.inputEmailDoUsuarioNaEdicao,
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.usuarioEscolhido[0].id}`, body, {
      headers:{
        "Authorization": 'allan-gilber-maryam'
      }
    }).then(() => {
      alert(`Os dados do usuário ${this.state.inputNomeDoUsuarioNaEdicao} foram atualizados com sucesso!`)
      this.buscarListaDeUsuarios()
      this.telaDoUsuarioSelecionado(this.state.usuarioEscolhido[0])
    }).catch((error) => {
      alert(error)
    })
      this.setState({ inputNome: '' , inputEmail: ''})
    } else {
      alert("Não houve alteração nos dados informados.")
      this.setState({ paginaAtual: 3 })
    }
    if(((this.state.inputNomeDoUsuarioNaEdicao !== this.state.usuarioEscolhido[0].name) && (this.state.inputEmailDoUsuarioNaEdicao === this.state.usuarioEscolhido[0].email)) && (this.state.inputNomeDoUsuarioNaEdicao)) {

      const body ={
        name: this.state.inputNomeDoUsuarioNaEdicao,
      }
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.usuarioEscolhido[0].id}`, body, {
        headers:{
          "Authorization": 'allan-gilber-maryam'
        }
      }).then(() => {
        alert(`Os dados do usuário ${this.state.inputNomeDoUsuarioNaEdicao} foram atualizados com sucesso!`)
        this.buscarListaDeUsuarios()
        this.telaDoUsuarioSelecionado(this.state.usuarioEscolhido[0])
      }).catch((error) => {
        alert(error.response.data.message)
      })
        this.setState({ inputNome: '' , inputEmail: ''})
      } if(((this.state.inputNomeDoUsuarioNaEdicao === this.state.usuarioEscolhido[0].name) && (this.state.inputEmailDoUsuarioNaEdicao !== this.state.usuarioEscolhido[0].email)) && (this.state.inputEmailDoUsuarioNaEdicao)){

        const body ={
          email: this.state.inputEmailDoUsuarioNaEdicao,
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.usuarioEscolhido[0].id}`, body, {
          headers:{
            "Authorization": 'allan-gilber-maryam'
          }
        }).then(() => {
          alert(`Os dados do usuário ${this.state.inputNomeDoUsuarioNaEdicao} foram atualizados com sucesso!`)
          this.buscarListaDeUsuarios()
          this.telaDoUsuarioSelecionado(this.state.usuarioEscolhido[0])
        }).catch((error) => {
          alert(error)
        })
          this.setState({ inputNome: '' , inputEmail: ''})
        } 
      if ((this.state.inputNomeDoUsuarioNaEdicao === this.state.usuarioEscolhido[0].name) && (this.state.inputEmailDoUsuarioNaEdicao === this.state.usuarioEscolhido[0].email)) {
        alert("Não houve alteração nos dados informados.")
        this.setState({ paginaAtual: 3 })
      }
  }

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
          busca = {this.state.busca}
          onChangeInputBusca = {this.onChangeInputBusca}
        />
      );
      case 3: return (
        <PaginaDoUsuarioSelecionado
        usuarioEscolhido = {this.state.usuarioEscolhido}
        listaDeUsuarios = {this.state.listaDeUsuarios}
        removerUsuario = {this.removerUsuario}
        botaoDeNavegacao = {this.botaoDeNavegacao}
        telaDoUsuarioSelecionado = {this.telaDoUsuarioSelecionado}
        editarUsuario = {this.editarUsuario}
        onChangeInputNomeDoUsuarioNaEdicao = {this.onChangeInputNomeDoUsuarioNaEdicao}
        onChangeInputEmailDoUsuarioNaEdicao = {this.onChangeInputEmailDoUsuarioNaEdicao}
        />
      );
      case 4: return (
        <PaginaDeEdicaoDoUsuario
        usuarioEscolhido = {this.state.usuarioEscolhido}
        listaDeUsuarios = {this.state.listaDeUsuarios}
        removerUsuario = {this.removerUsuario}
        botaoDeNavegacao = {this.botaoDeNavegacao}
        telaDoUsuarioSelecionado = {this.telaDoUsuarioSelecionado}
        salvarDadosDoUsuario = {this.salvarDadosDoUsuario}
        inputNomeDoUsuarioNaEdicao = {this.inputNomeDoUsuarioNaEdicao}
        inputEmailDoUsuarioNaEdicao = {this.inputEmailDoUsuarioNaEdicao}
        onChangeInputNomeDoUsuarioNaEdicao = {this.onChangeInputNomeDoUsuarioNaEdicao}
        onChangeInputEmailDoUsuarioNaEdicao = {this.onChangeInputEmailDoUsuarioNaEdicao}
        />
      );
    }
  };

  botaoDeNavegacao = (number) => {

    this.setState({ paginaAtual: number })

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
