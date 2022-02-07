import AddTarefaBtn from './AddTarefaBtn'
import styles from './AddTarefaBtn.module.css'
import AddTarefasInput from './AddTarefaInput'

const AddContainer = ({tarefas}) => {
    return ( 
        <div className={styles.addContainer}>
        <AddTarefasInput tarefas={tarefas} />
        <AddTarefaBtn>
            Adicionar
        </AddTarefaBtn>
        </div>
     )
}
 
export default AddContainer