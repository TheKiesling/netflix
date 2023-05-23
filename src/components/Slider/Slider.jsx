import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import styles from './Slider.module.css'
import Movie from '../Movie/Movie'

const Slider = ({ title }) => {
  const movies = [
    { index: 0, imgSrc: 'https://i.blogs.es/6d84c8/breaking-bad/1366_2000.jpg' },
    { index: 1, imgSrc: 'https://ntvb.tmsimg.com/assets/p9155926_b_h8_as.jpg?w=960&h=540' },
    { index: 2, imgSrc: 'https://dark.netflix.io/share/global.png' },
    { index: 3, imgSrc: 'https://cuatrobastardos.com/wp-content/uploads/2018/12/Better-Call-Saul-Season-4.jpg' },
    { index: 4, imgSrc: 'https://i.ytimg.com/vi/rQvIR1oL1vE/maxresdefault.jpg' },
    { index: 5, imgSrc: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/CQBIOWSLBVBVXF2X3XHKAALQTQ.png' },
    { index: 6, imgSrc: 'https://imgmedia.larepublica.pe/1200x660/larepublica/original/2021/01/19/60077938fdf0f8535159fe62.jpg' },
    { index: 7, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1freQcb3Ul7qWRsmbFun1R-i1ZX81T5MZw&usqp=CAU' },
    { index: 8, imgSrc: 'https://www.eltiempo.com/files/article_main_1200/uploads/2019/04/30/5cc8c959b791f.png' },
    { index: 9, imgSrc: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQhFFW-tbpg3RISB2IOFXruk5DQxejckJecw5HZycFnZodxl67TekY2mcBdZv8zTlLpiZE1LvILSAQAVRD9jRvjz5Fft3BcSRMah_BtkiDPj-pKvEL_uoW7U0aEJEeotY3JELw.jpg?r=a03' },
  ]

  const [slideNumber, setSlideNumber] = useState(0)
  const [showExplore, setShowExplore] = useState(false)
  const moviesRef = useRef()

  const [randomMovies, setRandomMovies] = useState([])
  const rndMovies = () => {
    const clonedMovies = [...movies]
    const shuffledMovies = clonedMovies.sort(() => Math.random() - 0.5)
    const uniqueIndexes = Array.from(Array(10).keys()) // Genera un array de números del 0 al 9 en orden ascendente
    const newMovies = shuffledMovies.map((movie, index) => ({
      index: uniqueIndexes[index % 10],
      imgSrc: movie.imgSrc,
    }))
    setRandomMovies(newMovies)
  }

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

  useEffect(() => {
    rndMovies()
  }, [])

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
        <div className={`${styles.movies}`} ref={moviesRef}>
          {randomMovies.map((movie) => (
            <Movie index={movie.index} imgSrc={movie.imgSrc} />
          ))}
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
