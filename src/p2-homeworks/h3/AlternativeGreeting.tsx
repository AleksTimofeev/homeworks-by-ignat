import React from "react";
import {IdType, UserType} from "./HW3";
import User from "./User";

type PropsType = {
  users: UserType[]
  removeUserCallback: (id: IdType) => void
}

const AlternativeGreeting: React.FC<PropsType> = ({users, removeUserCallback}) => {

  const userClickHandler = (id: IdType) => {

  }

  return (
    <ul>
      {users?.map((user, i) => (
        <User key={i} data={user} userClickHandler={() => userClickHandler(user._id)} removeUserCallback={removeUserCallback} />
      ))}
    </ul>
  );
}

export default AlternativeGreeting;
