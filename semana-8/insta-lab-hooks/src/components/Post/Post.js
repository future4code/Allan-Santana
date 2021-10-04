import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [numeroCurtidas, handleCurtidas] = useState(0)
  const [curtido, usuarioCurtiu] = useState(false)
  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco
  const [commentaries, handleCommentaries] = useState(false)
  const [listOfCommentaries, handleListOfCommentaries] = useState([])

  const onClickCurtida = () => {
    if (curtido){
      usuarioCurtiu(false)
      handleCurtidas(numeroCurtidas - 1)
    } else{
      usuarioCurtiu(true)
      handleCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    handleCommentaries(!commentaries)
  };

  const enviarComentario = (comentario) => {

    const spread = [...listOfCommentaries, comentario]

    handleListOfCommentaries(spread)

    handleCommentaries(false)

  };

  const shouldCallCommentSection = commentaries ? (<SecaoComentario enviarComentario= {enviarComentario}/>) : null

  function caixaDeComentario() {

    const comments = listOfCommentaries.map( comment => {
    return(
      <CommentContainer>
        <p>{comment}</p>
      </CommentContainer>)
    })

    return comments
  }


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
          curtido = {curtido}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario()}
      {shouldCallCommentSection}
    </PostContainer>
  )
}

export default Post