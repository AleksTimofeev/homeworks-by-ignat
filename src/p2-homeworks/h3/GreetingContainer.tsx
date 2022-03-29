import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}
export type ErrorType = '' | 'error'

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<ErrorType>('')

    const setNameCallback = (value: string) => {
        setName(value.trim())
      setError('')
    }
    const addUser = () => {
      if(name.length > 0 ) {
        addUserCallback(name)
        alert(name)
        setName('')
      } else {setError('error')}
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
