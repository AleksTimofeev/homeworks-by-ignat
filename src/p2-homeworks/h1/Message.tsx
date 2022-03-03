import React from 'react'
import {MessageDataType} from "./HW1";
import styles from './Message.module.css'

const Message: React.FC<MessageDataType> = ({avatar, name,message,time}) => {
    return (
        <div className={styles.message}>
            <img src={avatar} alt={'avatar'} />
            <div className={styles.textWrapper}>
              <div className={styles.col}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.text}>{message}</p>
              </div>
                <span className={styles.time}>{time}</span>
            </div>
        </div>
    )
}

export default Message
