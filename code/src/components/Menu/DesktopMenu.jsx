import React from 'react'
import { Link } from 'gatsby'
import menuData from '../../../data/menuData'

const Menu = ({ currentUri, menuInDarkmode }) => {
  const activeSubmenuItem = menuData.submenu.find(
    submenuItem => submenuItem.url === currentUri
  )
  return (
    <div className="ah-menu">
      <ul className="ah-menu-list">
        {activeSubmenuItem && (
          <li className="ah-menu-list-item-wrapper">
            <Link
              to={activeSubmenuItem.url}
              className={`ah-menu-list-item ah-menu-list-submenu-item--active ${
                menuInDarkmode
                  ? 'ah-menu-list-submenu-item--active--darkmode'
                  : ''
              }`}
            >
              {activeSubmenuItem.title.toUpperCase()}
            </Link>
          </li>
        )}
        {menuData.menu.map((menuItem, index) => (
          <li
            key={`${index}-${menuItem.title}`}
            className="ah-menu-list-item-wrapper"
          >
            <Link
              to={menuItem.url}
              className={`ah-menu-list-item ${
                menuItem.url === currentUri ? 'ah-menu-list-item--active' : ''
              } ${menuInDarkmode ? 'ah-menu-list-item--darkmode' : ''}`}
            >
              {menuItem.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
