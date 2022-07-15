import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
export function NewTask() {
    return (

        <main className={styles.newTask}>
             <div>
                <input className={styles.inputTask}  placeholder='Adicione uma tarefa'>
                </input>
             </div>
             <div>
                <button className={styles.createButton}>
                    <span className={styles.textCriar}> Criar </span>
                    <PlusCircle size={32} />
                </button>
            </div>
        </main>
    )
}