import { useEffect, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import styles from './slider.module.scss'

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let intervalId

    const startAutoplay = () => {
      return setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 6000)
    }

    if (autoplay) {
      intervalId = startAutoplay()
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [autoplay, slides.length])

  const handlePreviousClick = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handleAutoplayToggle = () => {
    setAutoplay((prev) => !prev)
  }

  const renderNavigationDots = () => {
    return slides.map((_, index) => (
      <button
        key={index}
        className={`${styles.dotCircle} ${
          index === currentIndex ? styles.active : ''
        }`}
        onClick={() => setCurrentIndex(index)}
      >
        <div className={styles.dot}></div>
      </button>
    ))
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slide_container}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.slide_image}
            />
            <div className={styles.slide_content}>
              <div className="container">
                <h2>
                  <span>{slide.title}</span>
                </h2>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controlsWrap}>
        <div className={styles.navigation}>{renderNavigationDots()}</div>
        <div className={styles.controls}>
          <button onClick={handleAutoplayToggle} className={styles.play_pause}>
            {autoplay ? <FaPause /> : <FaPlay />}
          </button>
          <button className={styles.arrow} onClick={handlePreviousClick}>
            <MdKeyboardArrowLeft />
          </button>
          <button className={styles.arrow} onClick={handleNextClick}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider
