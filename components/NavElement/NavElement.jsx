import React, {useState, useEffect} from 'react'
import styles from './NavElement.module.css'

const NavElement = ({text}) => {
    return (
    <span className={`${styles.text}`}>{text}</span>
)}

export default NavElement