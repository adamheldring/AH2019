import React from 'react'
import { Link } from 'gatsby'
import menuData from '../../data/menuData'

const Menu = ({ currentUri, menuInDarkmode }) => (
  <nav className="ah-menu">
    <ul className="ah-menu-list">
      {menuData.menu.map((menuItem, index) => (
        <li key={`${index}-${menuItem.title}`}>
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
  </nav>
)

export default Menu
