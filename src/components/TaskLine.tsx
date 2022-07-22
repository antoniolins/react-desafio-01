// ********************************************************************
// ADICIONAR TAREFAS - REACT DESAFIO 01
// Author: Antonoi Lins
// Data  : 20/07/2022
// ******************************************************************** 
import { PlusCircle , Trash, Check, RadioButton } from 'phosphor-react'
import { AddTask } from "./AddTask"
import styles from './AddTask.module.css'

import Unchecked  from '../assets/Unchecked.svg'
import Checked  from '../assets/Checked.svg'
import LogoEmptyTask from '../assets/LogoEmptyTask.svg'

interface TaskProps {
    id: string,
    isCompleted: boolean,
    title: string
    handleCheck: any;
    handleDelete: any
}

    export const TaskLine = ( task: TaskProps )=> {

    return ( 

        <li  key={task.id} className={styles.containerTask}>

            <div className={styles.lineItemTask}>
                <div>
                    <img src={ task.isCompleted ? Checked : Unchecked} alt ="Unchecked" 
                                            onClick={() => task.handleCheck(task.id)}
                                            className={styles.ckeckedBotton}
                    />
                    <label className={styles.lineShowTitle}
                                    style={(task.isCompleted) ? { textDecoration: 'line-through' } : null}
                                        onDoubleClick={() => task.handleCheck(task.id)}>

                                        {task.title}
                    </label> 
                 </div>
                 <div>
                    <button className={styles.trashBotton}     
                            onClick={() => task.handleDelete(task.id)} >
                                 <Trash  size={24} 
                                        // role="button"/>
                                />
                    </button>
                </div>
            </div>
        </li>
    )

    }
