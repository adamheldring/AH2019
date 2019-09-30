import React from 'react'
import { Link } from 'gatsby'
import { MdClose } from 'react-icons/md'
import { useSpring, useTrail, animated } from 'react-spring'
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar'
import menuData from '../../../data/menuData'

const MobileMenu = ({ setMobileMenuOpen }) => {
  const menuItems = menuData
  const trail = useTrail(menuItems.length, {
    opacity: 1,
    from: { opacity: 0 },
    delay: 100,
  })
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <span>AH2019</span>
        <button
          type="button"
          className="mobile-menu__button"
          onClick={() => setMobileMenuOpen(false)}
        >
          <MdClose />
        </button>
      </div>
      <ul>
        {trail.map((props, index) => (
          <animated.div
            key={menuItems[index].title}
            style={{ ...props, overflow: 'hidden' }}
          >
            <MenuItem
              menuItem={menuItems[index]}
              index={index}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </animated.div>
        ))}
      </ul>
      <SocialMediaBar />
      <div className="mobile-menu__submenu">
        <span className="mobile-menu__submenu-item">CONTACT</span> |{' '}
        <span className="mobile-menu__submenu-item">ABOUT</span>
      </div>
    </div>
  )
}

const MenuItem = ({ menuItem, index, setMobileMenuOpen }) => {
  const listItemStyle = useSpring({ color: '#333', from: { color: '#eeeeee' } })
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

export default MobileMenu
