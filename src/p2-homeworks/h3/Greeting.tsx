import React from 'react'
import {ErrorType} from "./GreetingContainer";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import styles from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string
  setNameCallback: (value: string) => void
  addUser: () => void
  error: ErrorType
  totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {

  return (
    <div className={styles.greetingWrapper}>
      <SuperInputText
        value={name}
        onChangeText={setNameCallback}
        onEnter={addUser}
        error={error}
        className={styles.input}
      />
      {error ? <span>{error}</span> : <SuperButton className={styles.btn} onClick={addUser}>add</SuperButton>}
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
