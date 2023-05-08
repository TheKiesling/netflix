import React from 'react'
import PropTypes from 'prop-types'
import styles from './NotificationElement.module.css'

const NotificationElement = ({
  src, header, text, date,
}) => (
  <span className={`${styles.notification}`}>
    <div className={`${styles.img}`}>
      <img
        src={src}
        alt=""
      />
    </div>
    <div className={`${styles.text}`}>
      <h1>{header}</h1>
      <h1>{text}</h1>
      <span>{date}</span>
    </div>
  </span>
)

NotificationElement.propTypes = {
  src: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default NotificationElement
