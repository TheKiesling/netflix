import React from 'react'
import styles from './NotificationElement.module.css'

const NotificationElement = ({src, header, text,date}) => {
  return (
    <span className={`${styles.notification}`}>
      <div className={`${styles.img}`}>
        <img src={src}/>
      </div>
      <div className={`${styles.text}`}>
        <h1>{header}</h1>
        <h1>{text}</h1>
        <span>{date}</span>
      </div>
    </span>
  )
}

export default NotificationElement