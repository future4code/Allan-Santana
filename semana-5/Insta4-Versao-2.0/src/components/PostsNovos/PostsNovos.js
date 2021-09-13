import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  min-height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  border: solid gray;
  border-width: 0 0 1px 0;
  p {
    text-align: justify;
  }
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border: solid gray;
  border-width: 1px 0 0 0;
`

const PostMainText = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-content: center;
  justify-content: center;
  p{
  padding: 12px 4px;
  text-align: justify;
  width: 90%;
  margin: 0;
}
`

class PostsNovos extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {

    console.log('Curtiu!')

    if(!this.state.curtido){

      this.onClickSoma()

    } else{

      this.onClickSubtrai()
      
    }    
  }

  onClickSoma = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1})
  }
  onClickSubtrai = () => {
    this.setState({   curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas - 1})
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {

      iconeCurtida = iconeCoracaoPreto

    } else {

      iconeCurtida = iconeCoracaoBranco

    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <p>{this.props.nomeUsuario}</p>
        <p>{this.props.texto1}</p>
      </PostHeader>

      <PostMainText>

        <p>{this.props.texto2}</p>

      </PostMainText>

      <PostFooter>

        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      </PostFooter>

      {componenteComentario}
    
    </PostContainer>
  }
}

export default PostsNovos