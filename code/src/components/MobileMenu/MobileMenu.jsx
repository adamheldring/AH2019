import React from 'react'
import { Link } from 'gatsby'
import { MdClose } from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar'
import menuData from '../../../data/menuData'

const MobileMenu = ({ setMobileMenuOpen }) => (
  <div className="mobile-menu">
    <div className="mobile-menu__header">
      <span>AH2019</span>
      <button
        className="mobile-menu__button"
        onClick={() => setMobileMenuOpen(false)}
      >
        <MdClose />
      </button>
    </div>
    <ul>
      {menuData.map((menuItem, index) => (
        <MenuItem menuItem={menuItem} index={index} />
      ))}
    </ul>
    <SocialMediaBar />
    <div className="mobile-menu__submenu">
      <span className="mobile-menu__submenu-item">CONTACT</span> |{' '}
      <span className="mobile-menu__submenu-item">ABOUT</span>
    </div>
  </div>
)

export default MobileMenu

const MenuItem = ({ menuItem, index }) => {
  const listItemStyle = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <li key={`${index}-${menuItem.title}`}>
      <Link to={menuItem.url} onClick={() => setMobileMenuOpen(false)}>
        <animated.div
          style={listItemStyle}
          className="mobile-menu__item-wrapper"
        >
          <h2>{menuItem.title.toUpperCase()}</h2>
        </animated.div>
      </Link>
    </li>
  )
}
