import React, { useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import PropTypes from 'prop-types'
import styles from './Movie.module.css'
import DialogIconsMovie from '../DialogIconsMovie/DialogIconsMovie'

const Movie = ({ index }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showLike, setShowLike] = useState(true)
  const [descAdd, setDescAdd] = useState(false)
  const [descDislike, setDescDislike] = useState(false)
  const [descLike, setDescLike] = useState(false)
  const [descLove, setDescLove] = useState(false)
  const [descDetails, setDescDetails] = useState(false)

  return (
    <div
      className={`${styles.movie}`}
      style={{ left: showInfo && (index * 233.5 + index * 3.5) }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowLike(true)}
    >
      <img
        src="https://i.blogs.es/6d84c8/breaking-bad/1366_2000.jpg"
        alt=""
      />
      {
            showInfo
              ? (
                <div className={`${styles.info}`}>
                  <div className={`${styles.icons}`}>
                    <div className={`${styles.iconsPrimary}`}>
                      <div>
                        <PlayArrowIcon
                          className={`${styles.icon} ${styles.play}`}
                        />
                      </div>
                      <div className={`${styles.addIcon}`}>
                        <AddIcon
                          className={`${styles.icon}`}
                          onMouseEnter={() => setDescAdd(true)}
                          onMouseLeave={() => setDescAdd(false)}
                        />
                        {
                          descAdd ? <DialogIconsMovie text="Agregar a Mi lista" left="30" /> : null
                        }
                      </div>
                      <div>
                        {
                          showLike
                            ? (
                              <ThumbUpIcon
                                onMouseEnter={() => setShowLike(false)}
                                onMouseLeave={() => setShowLike(true)}
                                className={`${styles.icon}`}
                              />
                            )
                            : (
                              <div
                                className={`${styles.like}`}
                                onMouseEnter={() => setShowLike(false)}
                                onMouseLeave={() => setShowLike(true)}
                              >
                                <div className={`${styles.addIcon}`}>
                                  <ThumbDownIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescDislike(true)}
                                    onMouseLeave={() => setDescDislike(false)}
                                  />
                                  {
                                    descDislike ? <DialogIconsMovie text="No es para mí" left="20" /> : null
                                  }
                                </div>
                                <div className={`${styles.addIcon}`}>
                                  <ThumbUpIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescLike(true)}
                                    onMouseLeave={() => setDescLike(false)}
                                  />
                                  {
                                    descLike ? <DialogIconsMovie text="Me gusta" left="20" /> : null
                                  }
                                </div>
                                <div className={`${styles.addIcon}`}>
                                  <FavoriteBorderIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescLove(true)}
                                    onMouseLeave={() => setDescLove(false)}
                                  />
                                  {
                                    descLove ? <DialogIconsMovie text="Me encanta" left="20" /> : null
                                  }
                                </div>
                              </div>
                            )
                        }
                      </div>
                    </div>
                    <div className={`${styles.iconsSecondary}`}>
                      <div className={`${styles.addIcon}`}>
                        <KeyboardArrowDownIcon
                          className={`${styles.icon} ${styles.details}`}
                          onMouseEnter={() => setDescDetails(true)}
                          onMouseLeave={() => setDescDetails(false)}
                        />
                        {
                        descDetails ? (
                          <DialogIconsMovie
                            text="Episodios e info"
                            left="23"
                          />
                        ) : null
                      }
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.chapterInfo}`}>
                    <span className={`${styles.episode}`}>T5:E14</span>
                    <span className={`${styles.title}`}>«Ozymandias»</span>
                  </div>
                  <div className={`${styles.duration}`}>
                    <progress value="1" max="53" className={`${styles.colored}`} />
                    <span className={`${styles.time}`}> 1 de 53 min </span>
                  </div>
                </div>
              ) : null
        }
    </div>
  )
}

export default Movie

Movie.propTypes = {
  index: PropTypes.number.isRequired,
}
