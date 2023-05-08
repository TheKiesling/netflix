import React from 'react'
import PropTypes from 'prop-types'
import styles from './DialogIconsMovie.module.css'

const DialogIconsMovie = ({ text }) => (
  <div className={`${styles.dialog}`}>{text}</div>
)

export default DialogIconsMovie

DialogIconsMovie.propTypes = {
  text: PropTypes.number.isRequired,
}
