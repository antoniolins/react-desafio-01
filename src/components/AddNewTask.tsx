import { PlusCircle , Trash, Check } from 'phosphor-react'
import styles from './AddNewTask.module.css'

import Unchecked  from '../assets/Unchecked.svg'
import Checked  from '../assets/Checked.svg'


import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

interface Task {
    id: string,
    isCompleted: boolean,
    title: string
}
export function AddNewTask() {

    const [tasks, setTasks] = useState([
        { id: uuidv4(),
           isCompleted: true,
          title: 'Terminar o desasfio',
        },
        { id: uuidv4(),
            isCompleted: false,
           title: 'Estudar Typescript',
         },
         { id: uuidv4(),
            isCompleted: false,
           title: 'Implementar Lixeira',
         }
    ])

    const [newTitle, setNewTitle] = useState("");

    const handleCheck = (id: string) => {
        const listTasks = tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);
        setTasks(listTasks);
    //   localStorage.setItem('shoppinglist', JSON.stringify(listTasks));
    }

    const handleDelete = (id: string) => {
        const listTasks = tasks.filter((task) => task.id !== id);
        setTasks(listTasks);
     //   localStorage.setItem('shoppinglist', JSON.stringify(listTasks));
    }

    const addNewTask = () => {
         const newTask = { id: uuidv4(),
            isCompleted: false,
            title: newTitle     };

         console.log(newTitle)
        setTasks([ ...tasks, newTask]);
        setNewTitle("")
         
        }
     //   localStorage.setItem('shoppinglist', JSON.stringify(listTasks));
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("  Subimitted !!!")
        addNewTask();
       
    }

    return (

    <main>
        <form className={styles.container} onSubmit={handleSubmit}>

                <input className={styles.inputTask}
                    autoFocus
                    type="text" 
                    placeholder='Adicione uma tarefa'
                    required
                    value = {newTitle}
                    onChange = { (e) => setNewTitle(e.target.value)}
                />

            <div className={styles.buttonInsertTask}>
                <button>
                    <strong>Criar</strong>
                    <PlusCircle size={36} />
                </button>
            </div>
        </form>

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


        <section className='tasklist'>
            {tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <li className="title" key={task.id}>

                                <img src={ task.isCompleted ? Checked : Unchecked} alt ="Unchecked" 
                                    onClick={() => handleCheck(task.id)}
                                />

                            <label
                               style={(task.isCompleted) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(task.id)}>

                                {task.title}
                            </label> 

                            <Trash
                                onClick={() => handleDelete(task.id)}
                                role="button"
                           />
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </section>
    </main>
    )
}