// ********************************************************************
// ADICIONAR TAREFAS - REACT DESAFIO 01
// Author: Antonoi Lins
// Data  : 20/07/2022
// ******************************************************************** 
import { PlusCircle , Trash, Check, RadioButton } from 'phosphor-react'
import styles from './AddTask.module.css'

import Unchecked  from '../assets/Unchecked.svg'
import Checked  from '../assets/Checked.svg'
import LogoEmptyTask from '../assets/LogoEmptyTask.svg'


import {v4 as uuidv4} from 'uuid';
import { useState , useEffect } from 'react';
import { TaskLine } from './TaskLine'

interface Task {
    id: string,
    isCompleted: boolean,
    title: string
}

export function AddTask() {

    const [tasks, setTasks] = useState<Array<Task>>([])

    const [countTaskTodo, setTaskTodo] = useState(0);
    const [countTaskReady, setTaskReady] = useState(0);
    const [newTitle, setNewTitle] = useState("");

    // Havendo quaisquer Inclusão ou Exclusão de Tarefas implica que haverá renderização
    // momento oportuno para contabilização do númros de tarefas inseridas / completadas
    useEffect(() => {
        setTaskTodo(tasks.length); /* Tarefas Criadas */
            const taskFinished = tasks.reduce((acc, {isCompleted}) => acc + (isCompleted? 1 : 0), 0);            
        setTaskReady(taskFinished); /* Tarefas Completadas */
    })

    const handleCheck = (id: string) => {
        const listTasks = tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);
        setTasks(listTasks);
    }

    const handleDelete = (id: string) => {
        const listTasks = tasks.filter((task) => task.id !== id);
        setTasks(listTasks);
    }

    const addNewTask = () => { 
         const newTask = { id: uuidv4(), isCompleted: false, title: newTitle};

        //  atualizar respeitando a imutabilidade do Hook State
         setTasks([ ...tasks, newTask]); 
         setNewTitle("")
        }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("  Subimitted !!!")
        addNewTask();
    }

    return (

//   Formulário ara entrada de novas tarefas
        
    <main>
        <form className={styles.formContainer} onSubmit={handleSubmit}>

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


        <div className={styles.counterTaskLabels}>
                 <div>
                     <span>Tarefas criadas: {countTaskTodo}</span>
                 </div>
                 <div>
                     <span>Tarefas concluidas: {countTaskReady} /  {countTaskTodo}</span>
                 </div>

        </div>
        <div className={styles.footLine}>
                    
        </div>

        {/* *** Exibe tarefas agendadas e/ou concluidas caso existam *** 

                Sub Compoente: TaskLine ( parâmetros passados por props: variáveis e funções(objeto) )
        */}
         
              {tasks.length ? (  
                <div >
                    <ul>
                            {tasks.map((task) => (

                            <TaskLine 
                                key={task.id}
                                id={task.id}
                                isCompleted={task.isCompleted}
                                title = {task.title}
                                handleCheck={handleCheck}
                                handleDelete={handleDelete}
                            />

                            ))}
                    </ul>
                </div>
                ) : (
                    <div className={styles.todoEmpty}>
                                    
                        <img src={LogoEmptyTask} 
                                    alt ="Task List is Empty !" 
                                    className={styles.logoEmptyTask}
                         />
        
                         <div className={styles.textEmptyTask}>
                                <p> Você ainda não tem  tarefas  cadastradas</p>
                                <p> Crie tarefas e organize seus itens a fazer</p>
        
                        </div>
        
                    </div>
                )}
                        

                
    </main>
    )
}