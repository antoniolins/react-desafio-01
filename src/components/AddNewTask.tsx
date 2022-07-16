import { PlusCircle } from 'phosphor-react'
import styles from './AddNewTask.module.css'


export function AddNewTask() {
    return (
    <div>
        <main className={styles.container}>
            <div>
                <input className={styles.inputTask} 
                     type="textarea" placeholder='Adicione uma tarefa'>
                </input>
            </div>

            <div className={styles.buttonInsertTask}>
                <button>
                    <strong>Criar</strong>
                    <PlusCircle size={36} />
                </button>
            </div>
        </main>

        <footer className={styles.counterTaskLabels}>
                 <div>
                     <span>Tarefas criadas: 8</span>
                 </div>
                 <div>
                     <span>Tarefas concluidas: 4</span>
                 </div>

        </footer>
        <div className={styles.footLine}>
                    
                    </div>
    </div>
    )
}