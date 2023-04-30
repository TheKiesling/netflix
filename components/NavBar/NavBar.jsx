import React, {useState} from 'react'
import styles from './NavBar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavElement from '../navElement/navElement'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'

const NavBar = () => {

  const [arrowDrop, setArrowDrop] = useState(true)

  return (
    <nav className={`${styles.navBar}`}>
      <div className={`${styles.navPrimary}`}>
        <Logo className={`${styles.logo}`}/>
        <NavElement text='Inicio'/>
        <NavElement text='Series'/>
        <NavElement text='Películas'/>
        <NavElement text='Novedades populares'/>
        <NavElement text='Mi lista'/>
        <NavElement text='Explora por idiomas'/>
      </div>
      <div className={`${styles.navSecondary}`}>
        <SearchIcon />
        <NavElement text='Niños'/>
        <NotificationsNoneIcon />
        <div
          className={`${styles.avatar}`}
          onMouseOver={() => setArrowDrop(false)} 
          onMouseLeave={() => setArrowDrop(true)}>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
          />
          <ArrowDropDown className={arrowDrop ? `${styles.down}` : `${styles.up}`}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar