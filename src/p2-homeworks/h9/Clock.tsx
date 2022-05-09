import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW9.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    // stop
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date())
      // setDate
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = `
    ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  }:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
  const stringDate = `
    ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}
  `

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && (
        <div className={styles.date}>
          {stringDate}
        </div>
      )}

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>

    </div>
  )
}

export default Clock
