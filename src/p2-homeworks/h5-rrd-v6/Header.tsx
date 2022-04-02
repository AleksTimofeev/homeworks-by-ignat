import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import styles from './HW5.module.css'

function Header() {



  return (
    <div className={styles.header}>
    <div className={styles.navigation}>
      <NavLink
        className={({isActive}) => isActive ? styles.activeLink : ''}
        to={PATH.PRE_JUNIOR}>
        PreJunior
        <span className={styles.borderLink}></span>
      </NavLink>
      <NavLink
        className={({isActive}) => isActive ? styles.activeLink : ''}
        to={PATH.JUNIOR}>
        Junior
        <span className={styles.borderLink}></span>
      </NavLink>
      <NavLink
        className={({isActive}) => isActive ? styles.activeLink : ''}
        to={PATH.JUNIOR_PLUS}>
        Junior +
        <span className={styles.borderLink}></span>
      </NavLink>
    </div>
    </div>
  )
}

export default Header
