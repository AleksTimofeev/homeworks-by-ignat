import React from 'react'
import s from './Greeting.module.css'
import {ErrorType} from "./GreetingContainer";

type GreetingPropsType = {
  name: string
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: ErrorType // need to fix any
  totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
  const inputClass = error ? s.error : '' // need to fix with (?:)

  return (
    <div>
      <input value={name}
             onChange={setNameCallback}
             onKeyPress={(e) => {
               if (e.code === 'Enter') {
                 addUser()
               }
             }}
             className={inputClass}/>
      {error ? <span>{error}</span> : <button onClick={addUser}>add</button>}
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
