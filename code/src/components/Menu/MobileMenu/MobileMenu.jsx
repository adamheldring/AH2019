import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { MdClose } from 'react-icons/md'
import { GiAnchor } from 'react-icons/gi'
import { useSpring, useTrail, animated } from 'react-spring'
import Img from 'gatsby-image'
import SocialMediaBar from '../../SocialMediaBar/SocialMediaBar'
import menuData from '../../../../data/menuData'

const MobileMenu = ({
  setMobileMenuOpen,
  mobileMenuButtonStyle,
  logo,
  currentUri,
}) => {
  const menuItems = menuData.menu
  const trail = useTrail(menuItems.length, {
    opacity: 1,
    from: { opacity: 0 },
    delay: 100,
  })
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <span>
          <Img fixed={logo} />
        </span>
        <animated.button
          style={mobileMenuButtonStyle}
          type="button"
          className="mobile-menu__button"
          onClick={() => setMobileMenuOpen(false)}
        >
          <MdClose className="ah-primary" />
        </animated.button>
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
              currentUri={currentUri}
            />
          </animated.div>
        ))}
      </ul>
      <div style={{ width: '250px' }}>
        <SocialMediaBar />
      </div>
      <div className="mobile-menu__submenu">
        {menuData.submenu.map((submenuItem, index) => (
          <Fragment>
            <Link
              to={submenuItem.url}
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-menu__submenu-item ${
                submenuItem.url === currentUri
                  ? 'mobile-menu__submenu-item--active'
                  : ''
              }`}
            >
              {submenuItem.title.toUpperCase()}
            </Link>
            {index !== menuData.submenu.length - 1 && <Fragment> | </Fragment>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const MenuItem = ({ menuItem, index, setMobileMenuOpen, currentUri }) => {
  const listItemStyle = useSpring({ color: '#333', from: { color: '#eeeeee' } })
  return (
    <li
      key={`${index}-${menuItem.title}`}
      className="mobile-menu__item-wrapper-outer"
    >
      {menuItem.url === currentUri && (
        <GiAnchor className="mobile-menu--active-marker" />
      )}
      <Link
        to={menuItem.url}
        onClick={() => {
          setMobileMenuOpen(false)
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        <animated.div
          style={listItemStyle}
          className="mobile-menu__item-wrapper-inner"
        >
          <h2>{menuItem.title.toUpperCase()}</h2>
        </animated.div>
      </Link>
    </li>
  )
}

export default MobileMenu
