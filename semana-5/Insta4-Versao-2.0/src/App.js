import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import PostsNovos from './components/PostsNovos/PostsNovos';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledNovoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  padding: 12px 0;
  input {
    width: 90%;
    margin: 4px 0;
  }
  input:nth-child(2) {
    height: 100px;
  }
  input:nth-child(3) {
    height: 100px;
  }
  button {
    width: 50%;
    padding: 4px;
    margin: 12px 0;
  }
`

class App extends React.Component {
  state = {

    post: [

      {
        nomeUsuario: "Paula",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost:"https://picsum.photos/200/150?a=1"
      },

      {
        nomeUsuario: "João",
        fotoUsuario:'https://picsum.photos/50/50?a=2',
        fotoPost: "https://picsum.photos/200/150?a=2"
      },

      {
        nomeUsuario:'Maria',
        fotoUsuario:'https://picsum.photos/50/50?a=3',
        fotoPost:'https://picsum.photos/200/150?a=3'
      },
    ],

    novosPosts: [
    ],

    nomeUsuario:"",
    texto1:"",
    texto2:""


  };

  adicionaNovoPost = () => {

    const novoPost = {

        nomeUsuario: this.state.nomeUsuario,
        texto1: this.state.texto1,
        texto2: this.state.texto2

    };

    const novoObjetoPost = [...this.state.novosPosts, novoPost];

    this.setState({ novosPosts: novoObjetoPost });
    
    this.setState({ nomeUsuario: "", texto1: "", texto2: ""})

    
  };

  onChangeInputNomeUsuario = (event) => {

    this.setState({ nomeUsuario: event.target.value });

  };

  onChangeInputTexto1 = (event) => {

    this.setState({ texto1: event.target.value });

  };

  onChangeInputTexto2 = (event) => {

    this.setState({ texto2: event.target.value });

  };

  render() {

    const feed = this.state.post.map((posts) =>{

      return (


        <Post 
        {...posts}
        />

      );

    })

    const newPost = this.state.novosPosts.map((novosPosts) =>{

      return (

        <PostsNovos
        {...novosPosts}
        />

      );

    })

    return (

      <div>

        <MainContainer>

          {feed}
          {newPost}

          <StyledNovoPost>

            <input

              value={this.state.nomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome do Usuário"}
            />

            <input

              value={this.state.texto1}
              onChange={this.onChangeInputTexto1}
              placeholder={"Digite o primeiro texto."}
            />

            <input

            value={this.state.texto2}
            onChange={this.onChangeInputTexto2}
            placeholder={"Digite o segundo texto."}
            />

            <button onClick={this.adicionaNovoPost}>Postar</button>

          </StyledNovoPost>

        </MainContainer>

      </div>
    );
  }
}

export default App;
