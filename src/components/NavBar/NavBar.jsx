import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import styles from './NavBar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavElement from '../NavElement/NavElement'
import Profile from '../Profile/Profile'
import Notifications from '../Notifications/Notifications'

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [transparent, setTransparent] = useState(true)

  window.onscroll = () => {
    setTransparent(window.pageYOffset === 0)
  }

  return (
    <nav className={transparent ? `${styles.navBar}` : `${styles.navBarN}`}>
      <div className={`${styles.navPrimary}`}>
        <Logo
          className={`${styles.logo}`}
          onClick={() => window.scrollTo({ top: 0 })}
        />
        <span
          onClick={() => window.scrollTo({ top: 0 })}
          onKeyUp=""
          role="button"
          tabIndex={-1}
        >
          Inicio
        </span>
        <NavElement text="Series" />
        <NavElement text="Películas" />
        <NavElement text="Novedades populares" />
        <NavElement text="Mi lista" />
        <NavElement text="Explora por idiomas" />
      </div>
      <div className={`${styles.navSecondary}`}>
        <div
          className={showSearch ? `${styles.search}` : `${styles.noSearch}`}
          aria-hidden
          onClick={() => setShowSearch(true)}
          onBlur={() => setShowSearch(false)}
          onKeyUp=""
          role="button"
        >
          <SearchIcon />
          {
            // eslint-disable-next-line jsx-a11y/no-autofocus
            showSearch ? <input placeholder="Títulos, personas, géneros" autoFocus /> : null
          }
        </div>
        <NavElement text="Niños" />
        <div
          className={`${styles.notifications}`}
          onMouseOver={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
          onFocus={() => setShowNotifications(false)}
        >
          <div>
            <NotificationsNoneIcon />
          </div>
          <span>
            {
              showNotifications ? <ArrowDropUp className={`${styles.arrowUp}`} /> : null
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
          onFocus={() => setShowProfile(false)}
        >
          <div
            className={`${styles.avatar}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <ArrowDropDown className={showProfile ? `${styles.up}` : `${styles.down}`} />
          </div>
          <span>
            {
              showProfile ? <ArrowDropUp className={`${styles.arrowUp}`} /> : null
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
