import React from 'react'
import { Link } from 'gatsby'
import menuData from '../../../data/menuData'
import './MobileMenu.sass'

const MobileMenu = ({ setMobileMenuOpen }) => (
  <div className="mobile-menu">
    <div className="mobile-menu__header">
      <span>AH2019</span>
    </div>
    <ul>
      {menuData.map((menuItem, index) => (
        <li key={`${index}-${menuItem.title}`}>
          <Link to={menuItem.url} onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-menu__item-wrapper">
              <h2>{menuItem.title.toUpperCase()}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <h2 onClick={() => setMobileMenuOpen(false)}>X CLOSE</h2>
  </div>
)

export default MobileMenu
