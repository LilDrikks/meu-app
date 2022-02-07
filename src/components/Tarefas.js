import AddTarefa from "./AddTarefaBtn";
import Tarefa from "./Tarefa";



const Tarefas = ({tarefas}) => {
    console.log({tarefas});
    //As props deste componente estão vindo do componente pai App
    //Ele tambem usa a props para mapear cada tarefa e manda para 
    //componente filho Tarefa o resultado de cada map como tarefa
    return (
        
        <>
        
            {tarefas.map(tarefa => 
                <>
                <Tarefa tarefa={tarefa}/>
                </>)}
        </>
    ) 
    
}
 
export default Tarefas;
