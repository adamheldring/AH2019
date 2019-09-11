import React from 'react'
import { Link } from 'gatsby'
import menuData from '../../data/menuData'

const Menu = () => (
  <nav style={{ backgroundColor: 'pink' }}>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {menuData.map((menuItem, index) => (
        <li key={`${index}-${menuItem.title}`}>
          <Link to={menuItem.url}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
