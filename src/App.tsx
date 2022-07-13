import { useState } from 'react'
import styles from './App.module.css'


import { Header } from '../src/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
      <div className="App">
          <h1>Ignite - React desafio 01</h1>
      </div>
    </div> 
  )
}

export default App
