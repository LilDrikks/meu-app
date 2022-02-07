import styles from './AddTarefaBtn.module.css'

const AddTarefaBtn = ({children, onClick}) => {

    return ( 
            <button onClick={onClick} className={styles.addButton}>
            {children}
            </button>
        )
}
 
export default AddTarefaBtn