const OffcanvsMenu = ({ navigationItems }) => {
  return (
    <nav>
      <ul>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
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
    </nav>
  )
}

export default OffcanvsMenu
