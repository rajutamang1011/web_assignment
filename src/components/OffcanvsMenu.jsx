import styles from './offcanvas.module.scss'

const OffcanvsMenu = ({ navigationItems }) => {
  return (
    <nav className={styles.navMenu}>
      <div className="container">
        <ul className={styles.row}>
          {navigationItems.map((item, index) => (
            <li className={styles.itemsBox} key={index}>
              <h2>
                <a href={item.link}>{item.label}</a>
              </h2>
              {item.dropdownItems && (
                <ul className="dropdown">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.label}>
                      <a href={dropdownItem.link}>{dropdownItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default OffcanvsMenu
