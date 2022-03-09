import React from 'react'
import styles from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

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

      {mappedAffairs}
      <div className={styles.buttonsPriority}>
        <button onClick={setAll}>All</button>
        <button onClick={setHigh}>High</button>
        <button onClick={setMiddle}>Middle</button>
        <button onClick={setLow}>Low</button>
      </div>
    </div>
  )
}

export default Affairs
