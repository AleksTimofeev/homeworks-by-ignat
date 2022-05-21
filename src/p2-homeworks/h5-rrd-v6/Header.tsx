import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import styles from './HW5.module.css'
import HW12 from "../h12/HW12";

function Header() {

  let [showMenu, setShowMenu] = useState(false)

  return (
    <div onMouseLeave={() => setShowMenu(false)} className={styles.header}>
      <div className={`${styles.navigation} ${showMenu ? styles.showNavigation : styles.closeNavigation}`}>
        <NavLink
          className={({isActive}) => isActive ? styles.activeLink : ''}
          to={PATH.PRE_JUNIOR}>
          PreJunior
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? styles.activeLink : ''}
          to={PATH.JUNIOR}>
          Junior
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? styles.activeLink : ''}
          to={PATH.JUNIOR_PLUS}>
          Junior +
        </NavLink>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={styles.menu}>Nav</div>
      <HW12 />
    </div>
  )
}

export default Header
