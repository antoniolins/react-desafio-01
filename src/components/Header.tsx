// ********************************************************************
// ADICIONAR TAREFAS - REACT DESAFIO 01
// Author: Antonoi Lins
// Data  : 20/07/2022
// ******************************************************************** 
import styles from './Header.module.css'

import todoLogo from '../assets/todoLogo.svg';

export function Header() {
    return (
            <header className={styles.header}>
                <img src={todoLogo} alt="Logotipo do Todo" 
                />
            </header>

    );
}