import styles from './AddTarefaBtn.module.css'

const AddTarefasInput = ({tarefas}) => {
    const inputAddTarefa = document.getElementById(tarefas.length + 1)

    return ( 
        <input id={tarefas.length + 1} type="text" className={styles.addInput} />
     )
}
 
export default AddTarefasInput