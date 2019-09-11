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
          <div className="mobile-menu__item-wrapper">
            <Link to={menuItem.url} onClick={() => setMobileMenuOpen(false)}>
              <h2>{menuItem.title.toUpperCase()}</h2>
            </Link>
          </div>
        </li>
      ))}
    </ul>
    <h2 onClick={() => setMobileMenuOpen(false)}>X CLOSE</h2>
  </div>
)

export default MobileMenu
