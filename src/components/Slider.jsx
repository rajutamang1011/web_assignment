import { useEffect, useState } from 'react'

const slides = [
  {
    image: 'images/slider/slider_1.jpg',
    title: 'Title 1',
    text: 'Some short text for slide 1',
  },
  {
    image: 'images/slider/slider_2.jpg',
    title: 'Title 2',
    text: 'Some short text for slide 2',
  },
  {
    image: 'images/slider/slider_1.jpg',
    title: 'Title 2',
    text: 'Some short text for slide 2',
  },
  // Add more slide objects here
]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let intervalId

    const startAutoplay = () => {
      return setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 8000)
    }

    if (autoplay) {
      intervalId = startAutoplay()
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [autoplay])

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
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))
  }

  return (
    <div className="slider">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleAutoplayToggle}>
          {autoplay ? 'Pause Autoplay' : 'Start Autoplay'}
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>

      <div className="navigation">{renderNavigationDots()}</div>
    </div>
  )
}

export default Slider
