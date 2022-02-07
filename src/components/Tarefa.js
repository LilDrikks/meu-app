import styles from './Tarefa.module.css'
const Tarefa = ({tarefa}) => {

    return ( 
        <div  className={styles.tarefaDisplay}>
        <p className={styles.tarefaCss}>{tarefa.titulo}</p>
        </div>
        );
}
 
export default Tarefa;