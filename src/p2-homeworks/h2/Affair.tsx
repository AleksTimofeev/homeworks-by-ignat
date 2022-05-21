import React from 'react'
import styles from './Affairs.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const theme = useSelector((state: AppStoreType) => state.theme.theme)
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  const finalClassName = `${styles.affairsItem} ${styles[`${props.affair.priority}Priority`]} ${styles[theme]}`
  return (
    <div className={finalClassName}>
      <span>{props.affair.name}</span>
      <span>{props.affair.priority}</span>
      <SuperButton red={true} onClick={deleteCallback}>X</SuperButton>
    </div>
  )
}

export default Affair
