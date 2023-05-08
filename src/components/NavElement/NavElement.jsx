import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavElement.module.css'

const NavElement = ({ text }) => (
  <span className={`${styles.text}`}>{text}</span>
)

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
}
export default NavElement
