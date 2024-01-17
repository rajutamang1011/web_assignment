import styles from './hero.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className={styles.flex_col}>
            <h1>
              The CLIP is <span>we will meet all your academic needs.</span>
            </h1>
            <div className="boxWrap">
              <div className="box">1</div>
              <div className="box">1</div>
              <div className="box">1</div>
              <div className="box">1</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              minima expedita, quibusdam ullam alias dolorum voluptatum!
              Consequatur, ullam! Officia quas architecto, inventore fugiat
              repellendus deserunt quod dolorum quidem corrupti aperiam!
            </p>
          </div>
          <div className={styles.flex_col}>
            <img src="images/hero.png" alt="hero_image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
