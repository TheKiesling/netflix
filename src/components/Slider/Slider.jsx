import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import styles from './Slider.module.css'
import Movie from '../Movie/Movie'

const Slider = ({ title }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [showExplore, setShowExplore] = useState(false)
  const moviesRef = useRef()

  const moveLeft = (distance) => {
    setSlideNumber(slideNumber - 1)
    return `translateX(${237 + distance}px)`
  }

  const moveRight = (distance) => {
    setSlideNumber(slideNumber + 1)
    return `translateX(${-237 + distance}px)`
  }

  const handleClick = (direction) => {
    const distance = moviesRef.current.getBoundingClientRect().x - 60
    moviesRef.current.style.transform = direction === 'left'
      ? moveLeft(distance) : moveRight(distance)
  }

  return (
    <div className={`${styles.slider}`}>
      <div
        className={`${styles.titleContainer}`}
        onMouseOver={() => setShowExplore(true)}
        onMouseLeave={() => setShowExplore(false)}
        onFocus={() => setShowExplore(false)}
      >
        <span className={`${styles.title}`}>
          {title}
        </span>
        {
            showExplore
              ? (
                <div
                  className={`${styles.exploreContainer}`}
                  style={{
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span className={`${styles.explore}`}>Explorar todos</span>
                  <ArrowForwardIcon
                    className={`${styles.arrowExplore}`}
                    style={{
                      fontSize: '1em',
                      marginLeft: '5px',
                      marginTop: '-1px',
                    }}
                  />
                </div>
              )
              : null
        }
      </div>
      <div className={`${styles.container}`}>
        {
          slideNumber > 0
            ? <ArrowBackIosIcon className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick('left')} />
            : null
        }
        <div
          className={`${styles.movies}`}
          ref={moviesRef}
        >
          <Movie index={0} />
          <Movie index={1} />
          <Movie index={2} />
          <Movie index={3} />
          <Movie index={4} />
          <Movie index={5} />
          <Movie index={6} />
          <Movie index={7} />
          <Movie index={8} />
          <Movie index={9} />
        </div>
        {
          slideNumber < 5
            ? <ArrowForwardIcon className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick('right')} />
            : null
        }
      </div>
    </div>
  )
}

Slider.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Slider
