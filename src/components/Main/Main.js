import './Main.css'
import {useState} from 'react'

function Main() {
    
  const  [mensagem, setMensagem] = useState('Hello World')

  const trocaMsg = () => {
      if(mensagem === 'Hello World'){
        setMensagem('By World')
      }
      else{
        setMensagem('Hello World')
      }
  }

    return(
    <>
        <main>
            {mensagem}
        
        <br/>
        
        <button onClick={trocaMsg}>Alterar mensagem</button>          
        </main>
       
    </>
    )
}

export default Main