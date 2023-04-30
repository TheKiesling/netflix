import React, {useState, useEffect} from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => (
  <body className={`${styles.netflix}`}>
    <header>
      <NavBar />
    </header>
  </body>
)

export default Home