import React from 'react'
import { Link } from 'gatsby'
import menuData from '../../data/menuData'

const Menu = ({ currentUri }) => (
  <nav className="ah-menu">
    <ul className="ah-menu-list">
      {menuData.map((menuItem, index) => (
        <li key={`${index}-${menuItem.title}`}>
          <Link
            to={menuItem.url}
            className={`ah-menu-list-item ${
              menuItem.url === currentUri ? 'ah-menu-list-item--active' : ''
            }`}
          >
            {menuItem.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
