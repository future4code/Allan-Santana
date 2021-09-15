import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da tarefa',
          completa: false
        },
        {
          id: Date.now(), 
          texto: 'Texto da segunda tarefa',
          completa: true
        }
      ],

      inputValue: '',
      filtro: '',

    }

  onChangeInput = (event) => {

this.setState({ inputValue: event.target.value});

  }

  criaTarefa = () => {

    const novoInput = {

      id: Date.now(),
      texto: this.state.inputValue,
      completa: false

    };

    const spread = [...this.state.tarefas, novoInput]

    this.setState({ tarefas: spread })
    this.setState({inputValue: ''})

  }

  selectTarefa = (id) => {

    const novasTarefas = this.state.tarefas.map(tarefa => {

    if (id === tarefa.id ){

      const tarefaSelecionada = {

        ...tarefa,

        completa: !tarefa.completa

      }

      return tarefaSelecionada

    } else {

      return tarefa

    }

  })

    this.setState({ tarefas: novasTarefas })

  }

  onChangeFilter = (event) => {

    this.setState({ filtro: event.target.value});

  }

  componentDidMount() {

    const formString = window.localStorage.getItem("dadosArmazenados")
    

    if(formString){

      const form = JSON.parse(formString)
      console.log("objeto a ser inserido", form)

      this.setState({

      tarefas: this.state.form

      });

    }

  };

  componentDidUpdate() {

    const dadosArmazenados = {

      ...this.state.tarefas

    };

    console.log(dadosArmazenados)

    window.localStorage.setItem("dadosArmazenados", JSON.stringify(dadosArmazenados))

  }

  render() {

    console.log("teste",this.state)

    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input 
            value={this.state.inputValue} 
            onChange={this.onChangeInput}
          />

          <button 
          onClick={this.componentDidUpdate}
          onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
