import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {stateLoading} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import styles from './HW10.module.css'

function HW10() {
  const dispatch = useDispatch()
  const loading: boolean = useSelector(stateLoading).loading

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 3000)
    console.log('loading...')

  };

  return (
    <div className={styles.wrapper}>
      <hr/>
      homeworks 10
      {loading
        ? (
          <div className={styles.center}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
          </div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
