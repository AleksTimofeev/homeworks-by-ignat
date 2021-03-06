import React from 'react'
import styles from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
  data: AffairType[]
  setFilter: (value: FilterType) => void
  deleteAffairCallback: (id: number) => void
}


function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: any) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter('all')
  } // need to fix
  const setHigh = () => {
    props.setFilter('high')
  }
  const setMiddle = () => {
    props.setFilter('middle')
  }
  const setLow = () => {
    props.setFilter('low')
  }

  return (
    <div className={styles.affairsWrapper}>
      <div className={styles.buttonsPriority}>
        <SuperButton className={styles.btn} onClick={setAll}>All</SuperButton>
        <SuperButton className={styles.btn} onClick={setHigh}>High</SuperButton>
        <SuperButton className={styles.btn} onClick={setMiddle}>Middle</SuperButton>
        <SuperButton className={styles.btn} onClick={setLow}>Low</SuperButton>
      </div>
      {mappedAffairs}
    </div>
  )
}

export default Affairs
