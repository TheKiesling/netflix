import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import styles from './MainSerie.module.css'

const MainSerie = () => (
  <div className={`${styles.mainSerie}`}>
    <div className={`${styles.info}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png"
        alt=""
      />
      <span>
        Better Call Saul es una serie que sigue la vida del astuto abogado Jimmy McGill,
        quien se convierte en el conocido abogado criminal Saul Goodman de Breaking Bad.
      </span>
      <div className={`${styles.buttons}`}>
        <button
          className={`${styles.play}`}
          type="submit"
        >
          <PlayArrowIcon />
          <span>Reproducir</span>
        </button>
        <button
          className={`${styles.more}`}
          type="submit"
        >
          <InfoOutlinedIcon />
          <span>Más información</span>
        </button>
      </div>
    </div>
    <div className={`${styles.age}`}>
      <span>18+</span>
    </div>
  </div>
)

export default MainSerie
