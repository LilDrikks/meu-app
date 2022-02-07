import './App.css'
import {useState} from 'react'
import Tarefas from './components/Tarefas'
import AddContainer from './components/AddContainer'


function App() {
  const [tarefas, setTarefas] = useState([
    {
      id:1,
      titulo:'Estudar React',
      completa: false
    },
    {
      id:2,
      titulo:'Ler sobre React',
      completa: false
    },
    {
      id:3,
      titulo:'Praticar React',
      completa: true
    },
    {
      id:3,
      titulo:'Praticar React',
      completa: true
    },
  ])

  //Props são as propriedades de um componente que podem ser passadas para seus filhos
  //aqui o componente App tem a props tarefas que é passada para o componente Tarefas
  return (
    <>
      <div className='container'>
      <AddContainer tarefas={tarefas} />
      <Tarefas tarefas={tarefas} />
      </div>
    </>
  )
}

export default App;
