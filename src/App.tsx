// ********************************************************************
// CURSO: IGNITE - REACT
// ADICIONAR TAREFAS - REACT DESAFIO 01
// Author: Antonoi Lins
// Data  : 20/07/2022
// ******************************************************************** 
import { Header } from '../src/components/Header'

import './global.module.css'

import styles from './App.module.css'

import { useState } from 'react'
import { AddTask } from './components/AddTask'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <AddTask />
    </div> 
  )
}