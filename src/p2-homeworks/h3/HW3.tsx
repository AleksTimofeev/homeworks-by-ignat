import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";
import styles from './Greeting.module.css'

// types
export type IdType = string
export type UserType = {
  _id: IdType
  name: string
  date: number
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([])

  const addUserCallback = (name: string) => {
    setUsers([{_id: v1(), name, date: new Date().getTime()}, ...users])
  }
  const removeUserCallback = (id: IdType) => {
    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <div className={styles.hw3Container}>
      <hr/>
      <span>homeworks 3</span>
      <div>
        <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        <hr/>
        <AlternativeGreeting users={users} removeUserCallback={removeUserCallback}/>
        <hr/>
      </div>
    </div>
  )
}

export default HW3
