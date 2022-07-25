// ********************************************************************
// ROCKETSEAT - PROJETO 01 FUNDAMENTOS DO REACTJS ( Ignite )
// ADICIONAR TAREFAS - REACT DESAFIO 01 
// Author: Antonoi Lins
// Data  : 20/07/2022
// Repositório: https://github.com/antoniolins/react-desafio-01
// ******************************************************************** 
import { Trash } from 'phosphor-react'
// import { AddTask } from "./AddTask"

import styles from './TaskLine.module.css'

import Unchecked  from '../assets/Unchecked.svg'
import Checked  from '../assets/Checked.svg'
import LogoEmptyTask from '../assets/LogoEmptyTask.svg'

interface TaskProps {
    id: string
    isCompleted: boolean
    title: string
    onCheckedTask: (comment: string) => void
    onDeleteTask: (comment: string) => void
}

 export function TaskLine ( {id, isCompleted, title, onCheckedTask, onDeleteTask}: TaskProps )  {

        function handleDeleteTask() {
            onDeleteTask(id);
        }

        function handleCheckedTask() {
            onCheckedTask(id);
        }

    return ( 

     <li  key={id} >

        <div className={styles.containerTask}>

            <div className={styles.boxTask}>
                <div>
                    <img  className={styles.checkedButton} src={ isCompleted ? Checked : Unchecked} alt ="Unchecked"
                                 onClick={handleCheckedTask}
                     />
                    </div>
                    <div className={styles.showLineTask}>

                        <p className={(isCompleted ? styles.textDecorationOn : styles.textDecorationOff )}>
                             {title}
                        </p>
                    </div>
            </div>
            <div>
                 <button className={styles.trashButton}     
                            onClick={handleDeleteTask} title="Delete Task">
                            <Trash  size={18} 
                            />
                 </button>
            </div>
        </div>
    </li>
    )
}
