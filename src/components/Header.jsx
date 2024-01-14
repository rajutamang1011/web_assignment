import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import OffcanvsMenu from './OffcanvsMenu'
const navigationItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Products',
    link: '/products',
    dropdownItems: [
      { label: 'Product Category 1', link: '/products/category1' },
      { label: 'Product Category 2', link: '/products/category2' },
    ],
  },
  { label: 'Services', link: '/services' },
  { label: 'About', link: '/about' },
  {
    label: 'Product',
    link: '/product',
    dropdownItems: [
      { label: 'Product Category 1', link: '/product/category1' },
      { label: 'Product Category 2', link: '/product/category2' },
    ],
  },
  { label: 'Contact', link: '/contact' },
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
    <header>
      <nav>
        <Link to="/" className="text-3xl font-semibold text-primary">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <ul>
          {navigationItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.link}>{item.label}</a>
              {item.dropdownItems && openDropdown === index && (
                <ul className="dropdown">
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <li key={index}>
                      <a href={dropdownItem.link}>{dropdownItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          id="menu-toggle"
          className={`block md:hidden focus:outline-none`}
          onClick={onClick}
        >
          {isOpen ? <IoClose /> : <FaBars />}
        </button>
      </nav>
      {isOpen && <OffcanvsMenu navigationItems={navigationItems} />}
    </header>
  )
}

export default Header
