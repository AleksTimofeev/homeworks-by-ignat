import React from 'react';
import {IdType, UserType} from "./HW3";
import styles from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type PropsType = {
  data: UserType
  userClickHandler: () => void
  removeUserCallback: (id: IdType) => void
}

const User: React.FC<PropsType> = ({
                                     data: {_id, name, date},
                                     userClickHandler,
                                     removeUserCallback
                                   }) => {
  const dateDay = new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()
  const month = new Date(date).getMonth() < 10 ? `0${new Date(date).getMonth()}` : new Date(date).getMonth()
  const hours = new Date(date).getHours() < 10 ? `0${new Date(date).getHours()}` : new Date(date).getHours()
  const Minutes = new Date(date).getMinutes() < 10 ? `0${new Date(date).getMinutes()}` : new Date(date).getMinutes()
  const dateOfCreation = `${dateDay}.${month}.${new Date(date).getFullYear()} ${hours}:${Minutes}`

  return (
    <li className={styles.user} onClick={userClickHandler}>
      <span title={`created ${dateOfCreation}`}>{name}</span>
      {/*<button onClick={()=>removeUserCallback(_id)}>delete</button>*/}
      <SuperButton red={true} onClick={()=>removeUserCallback(_id)}>delete</SuperButton>
    </li>
  );
};

export default User;