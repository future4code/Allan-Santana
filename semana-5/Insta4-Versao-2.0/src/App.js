import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

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
  align-content: center;
  min-height: 50px;
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
      }

    ],

    nomeUsuario:"",
    texto1:"",
    texto2:""

  };

  adicionaNovoPost = () => {

    const novoPost = {

        nomeUsuario: this.state.valorInputNomeUsuario,
        texto1: this.state.valorInputTexto1,
        texto2: this.state.valorInputTexto2

    };

    const novoObjetoPost = [...this.state.post, <StyledNovoPost novoPost/>];

    this.setState({ post: novoObjetoPost });

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

    return (
      <div>
        <MainContainer>

          {feed}

        </MainContainer>

        <StyledNovoPost>

          <input

            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />

          <input

            value={this.state.valorInputTexto1}
            onChange={this.onChangeInputTexto1}
            placeholder={"Digite o primeiro texto."}
          />

          <input

          value={this.state.valorInputTexto2}
          onChange={this.onChangeInputTexto2}
          placeholder={"Digite o segundo texto."}
          />

          <button onClick={this.adicionaNovoPost}>Postar</button>
          
        </StyledNovoPost>
      </div>
    );
  }
}

export default App;
