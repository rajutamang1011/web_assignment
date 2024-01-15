import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import OffcanvsMenu from './OffcanvsMenu'
import styles from './header.module.scss'
const navigationItems = [
  {
    label: 'Brand Story',
    link: '/',
    dropdownItems: [
      { label: 'Introduction to THE CLIP', link: '/products/category1' },
      { label: 'Product Category 2', link: '/products/category2' },
    ],
  },
  {
    label: 'Education Program',
    link: '/products',
    dropdownItems: [
      { label: 'learning process', link: '/products/category1' },
      { label: 'course and levels', link: '/products/category2' },
      { label: 'lecture support system', link: '/products/category2' },
      { label: 'online learning', link: '/products/category2' },
      { label: 'test center', link: '/products/category2' },
    ],
  },
  {
    label: 'THE CLIP News',
    link: '/services',
    dropdownItems: [{ label: 'announcement', link: '/products/category1' }],
  },
  {
    label: 'Customer Servie Center',
    link: '/about',
    dropdownItems: [
      { label: 'faq', link: '/products/category1' },
      { label: 'sample text book application', link: '/products/category1' },
      { label: 'apply for consultaion', link: '/products/category1' },
    ],
  },
]

const Header = () => {
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

  return (
    <header
      className={`${styles.headerWrapper} ${
        isHover || isOpen ? styles.white : ''
      }`}
    >
      <nav className={styles.mainNav}>
        <Link to="/" className={styles.logo}>
          <img
            src={isOpen || isHover ? '/images/logo_b.png' : '/images/logo.png'}
            alt="logo"
          />
        </Link>
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
        <button className={styles.menu_toggle} onClick={onClick}>
          {isOpen ? <IoClose /> : <FaBars />}
        </button>
      </nav>
      {isOpen && <OffcanvsMenu navigationItems={navigationItems} />}
    </header>
  )
}

export default Header
