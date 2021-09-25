import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const ContainerBusca = styled.div`
width: 40%;
min-height: 20%;
display: flex;
flex-direction: column;
background-color: gray;
border-radius: 10px;
input{
  border-radius: 10px;
  margin: 8px;
  border: 1px solid black;
  padding: 8px;
}
button{
  background-color: blue;
  color: white;
  border: none;
  margin: 8px auto;
  width: 40%;
  border-radius: 10px;
  height: 30px;
}`

export default class CriacaoDePlaylist extends React.Component {

    state = {

        playlistASerCriada:'',
        listaDePlaylists: '',
    
    };
    
    onChangeInputBusca = (event) => {
    this.setState({ playlistASerCriada: event.target.value});
    };

    onClickBuscar = () =>{

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
        headers: {
        Authorization: "allan-gilber-maryam"
        }
    }).then((response) => {
        console.log(response.data.result.list)
        let playlistsRecebidas = response.data.result.list.map((playlist) => {
                return (playlist.name, playlist.id)
        })
        this.setState({listaDePlaylists: playlistsRecebidas})
        }).catch((error) => {
        alert(error)
        })
        // this.setState({ busca: '' })
    };
    
    render() {
        return (

            <ContainerBusca>
                <input
                    placeholder="Insira o nome do pokemon"
                    value={this.state.playlistASerCriada}
                    onChange= {this.onChangeInputBusca} 
                    />

                <button onClick={() => this.onClickBuscar()}>Buscar</button>
            </ContainerBusca>

        )
    }
}
