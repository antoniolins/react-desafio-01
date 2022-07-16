
import { Header } from '../src/components/Header'

import './global.module.css'

import styles from './App.module.css'

import { useState } from 'react'
import { AddNewTask } from './components/AddNewTask'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <AddNewTask />
    </div> 
  )
}