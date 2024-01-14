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
      { label: 'Introduction to the clip', link: '/products/category1' },
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
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }
  const handleMouseEnter = (index) => {
    setOpenDropdown(index)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.mainNav}>
        <Link to="/" className="text-3xl font-semibold text-primary">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <ul className={styles.navMenu}>
          {navigationItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.link}>{item.label}</a>
              {item.dropdownItems && openDropdown === index && (
                <div className={styles.submenu}>
                  <ul className={styles.dropdown_menu}>
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <li key={index}>
                        <NavLink to={dropdownItem.link}>
                          {dropdownItem.label}{' '}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
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
