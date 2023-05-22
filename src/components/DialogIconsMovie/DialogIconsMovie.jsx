import React from 'react'
import PropTypes from 'prop-types'
import styles from './DialogIconsMovie.module.css'

const DialogIconsMovie = ({ text, left }) => (
  <div
    className={`${styles.dialog}`}
    style={{ left: `${left}px` }}
  >
    {text}

  </div>
)

export default DialogIconsMovie

DialogIconsMovie.propTypes = {
  text: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
}
