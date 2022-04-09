import React from 'react'
import styles from './Affairs.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix



  return (
    <div className={styles.affairsItem + ' ' + styles[`${props.affair.priority}Priority`]}>
      <span>{props.affair.name}</span>
      <span>{props.affair.priority}</span>
      <SuperButton red={true} onClick={deleteCallback}>X</SuperButton>
    </div>
  )
}

export default Affair