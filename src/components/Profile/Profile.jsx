import React from 'react'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import RepeatIcon from '@material-ui/icons/Repeat'
import styles from './Profile.module.css'

const Profile = () => (
  <ul className={`${styles.profile}`}>
    <li className={`${styles.element}`}>
      <img
        src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
        alt=""
      />
      <span>Usuario 1</span>
    </li>
    <li className={`${styles.element}`}>
      <img
        src="https://avatars.githubusercontent.com/u/6759280?v=4"
        alt=""
      />
      <span>Usuario 2</span>
    </li>
    <li className={`${styles.element}`}>
      <img
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt=""
      />
      <span>Usuario 3</span>
    </li>
    <li className={`${styles.element}`}>
      <img
        src="../../../kids.png"
        alt=""
      />
      <span>Niños</span>
    </li>
    <li className={`${styles.element}`}>
      <CreateOutlinedIcon />
      <span>Administrar perfiles</span>
    </li>
    <li className={`${styles.element}`}>
      <RepeatIcon />
      <span>Transferir perfil</span>
    </li>
    <li className={`${styles.element}`}>
      <PermIdentityIcon />
      <span>Cuenta</span>
    </li>
    <li className={`${styles.element}`}>
      <HelpOutlineOutlinedIcon />
      <span>Centro de ayuda</span>
    </li>
    <li className={`${styles.element}`}>
      <hr />
    </li>
    <li className={`${styles.element}`}>
      <span>Cerrar sesión en Netflix</span>
    </li>
  </ul>
)

export default Profile
