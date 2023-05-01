import React, {useState, useEffect} from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => (
  <body className={`${styles.netflix}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.mainSerie}`}>
      <img src='https://occ-0-1007-41.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXHrRD23-SCJ7YC30D2psLQqgEVLaxyPbl9ojlOrpPTJQNkfkvkStCvRJfMDEuRNVes4sqylWQ-tmGKVlWBWxOyI1SarTOgp8sYQ.jpg?r=a9c' />
    </div>
  </body>
)

export default Home