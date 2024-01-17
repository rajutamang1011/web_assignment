import { MdKeyboardArrowRight } from 'react-icons/md'
import styles from './hero.module.scss'
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className={`${styles.flex_col} ${styles.left}`}>
            <h1>
              <span>The CLIP is</span> <br />
              We will meet all your academic needs.
            </h1>
            <div className={styles.boxWrap}>
              <div className={styles.box}>
                <p>All text book for lectures</p>
                <h3>e-book</h3>
              </div>
              <div className={styles.box}>
                <p>Various classes related</p>
                <h3>Material</h3>
              </div>
              <div className={styles.box}>
                <p>For non face to face classes</p>
                <h3>e-learning</h3>
              </div>
              <div className={styles.box}>
                <p>For report generation</p>
                <h3>HMI System</h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              minima expedita, quibusdam ullam alias dolorum voluptatum!
              Consequatur, ullam! Officia quas architecto, inventore fugiat
              repellendus deserunt quod dolorum quidem corrupti aperiam!
            </p>
            <div className={styles.buttonWrapper}>
              <a href="#">
                View brochure <MdKeyboardArrowRight className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={`${styles.flex_col} ${styles.right}`}>
            <div className={styles.circle}></div>
            <img src="images/hero.png" alt="hero_image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
