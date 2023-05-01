import React, {useState} from 'react'
import styles from './NavBar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavElement from '../navElement/navElement'
import Profile from '../Profile/Profile'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import Notifications from '../Notifications/Notifications'

const NavBar = () => {

  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [transparent, setTransparent] = useState(true)

  window.onscroll = () => {
    setTransparent(window.pageYOffset === 0 ? true : false)
  }

  return (
    <nav className={transparent ? `${styles.navBar}` : `${styles.navBarN}`}>
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
        <div
          className={showSearch ? `${styles.search}` : `${styles.noSearch}`}
          onClick={() => setShowSearch(true)}
          onMouseLeave={() => setShowSearch(false)}
        >
          <SearchIcon />
          {
            showSearch ? <input placeholder='Títulos, personas, géneros' autoFocus/> : null
          }          
        </div>
        <NavElement text='Niños'/>
        <div
          className={`${styles.notifications}`}
          onMouseOver={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)} 
        >
          <div>
            <NotificationsNoneIcon />
          </div>
          <span>
            {
              showNotifications ? <ArrowDropUp className={`${styles.arrowUp}`}/> : null
            }
          </span>
          <div>
            {
              showNotifications ? <Notifications /> : null
            }
          </div>
        </div>
        <div 
          className={`${styles.profile}`}
          onMouseOver={() => setShowProfile(true)} 
          onMouseLeave={() => setShowProfile(false)}
        >
          <div
            className={`${styles.avatar}`}>
            <img 
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            />
            <ArrowDropDown className={showProfile ? `${styles.up}` : `${styles.down}`}/>
          </div>
          <span>
            {
              showProfile ? <ArrowDropUp className={`${styles.arrowUp}`}/> : null
            }
          </span>
          <div>
            {
              showProfile ? <Profile /> : null
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar