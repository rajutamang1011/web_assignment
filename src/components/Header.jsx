import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../data'
import OffcanvsMenu from './OffcanvsMenu'
import styles from './header.module.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }
  const handleMouseEnter = (index) => {
    setOpenDropdown(index)
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
    setIsHover(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 150

      if (scrollPosition > scrollThreshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () =>
      setIsMobile(window.innerWidth < 768)
    )
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <header
      className={`${styles.headerWrapper} ${
        isHover || isOpen || scrolled ? styles.white : ''
      } `}
    >
      <nav className={styles.mainNav}>
        <Link to="/" className={styles.logo}>
          <img
            src={
              isOpen || isHover || scrolled
                ? 'web_assignment/images/logo_b.png'
                : 'web_assignment/images/logo.png'
            }
            alt="logo"
          />
        </Link>
        {!isMobile && (
          <ul className={styles.navMenu}>
            {navigationItems.map((item, index) => (
              <li
                className={styles.menuitem}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item.link}
                  className={`${styles.item} ${
                    openDropdown === index ? styles.line : ''
                  }`}
                >
                  {item.label}
                </NavLink>
                {item.dropdownItems && openDropdown === index && (
                  <ul className={styles.dropdown_menu}>
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <li key={index}>
                        <NavLink to={dropdownItem.link}>
                          {dropdownItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}

        <button className={styles.menu_toggle} onClick={onClick}>
          {isOpen ? <IoClose className={styles.close} /> : <FaBars />}
        </button>
      </nav>

      {isOpen && <OffcanvsMenu navigationItems={navigationItems} />}
    </header>
  )
}

export default Header
