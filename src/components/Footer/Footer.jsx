import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import styles from './Footer.module.css'

const Footer = () => (
  <div className={`${styles.footer}`}>
    <div className={`${styles.icons}`}>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <YoutubeIcon />
    </div>
    <div className={`${styles.info}`}>
      <div>
        <span>Audio descriptivo</span>
        <span>Relaciones con inversionistas</span>
        <span>Avisos legales</span>
      </div>
      <div>
        <span>Centro de ayuda</span>
        <span>Empleo</span>
        <span>Preferencias de cookies</span>
      </div>
      <div>
        <span>Tarjetas de regalo</span>
        <span>Términos de uso</span>
        <span>Información corporativa</span>
      </div>
      <div>
        <span>Prensa</span>
        <span>Privacidad</span>
        <span>Contáctanos</span>
      </div>
    </div>
    <div className={`${styles.button}`}>
      <span>Código de servicio</span>
    </div>
    <div className={`${styles.copyright}`}>
      <span>© 1997-2023 Netflix, Inc.</span>
    </div>
  </div>
)

export default Footer
