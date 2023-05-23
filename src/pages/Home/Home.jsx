import React from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import MainSerie from '../../components/MainSerie/MainSerie'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'

const Home = () => (
  <div className={`${styles.netflix}`}>
    <header>
      <NavBar />
    </header>
    <div>
      <MainSerie />
      <div className={`${styles.sliders}`}>
        <Slider title="Mi lista" />
        <Slider title="Volver a verlo" />
        <Slider title="Solo en Netflix" />
      </div>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Home
