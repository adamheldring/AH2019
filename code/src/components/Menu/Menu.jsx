import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, useTransition, animated, config } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'
import './Menu.sass'
import './MobileMenu/MobileMenu.sass'

const Menu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  menuInDarkmode,
  currentUri,
  logo,
}) => {
  const transitions = useTransition(mobileMenuOpen, null, {
    from: { marginLeft: '100vw' },
    enter: { marginLeft: '0' },
    leave: { marginLeft: '100vw' },
    config: config.stiff,
  })
  const mobileMenuButtonStyle = useSpring({
    transform: `rotate(${mobileMenuOpen ? 0 : -135}deg)`,
    config: config.stiff,
  })
  const menuDarkmodeLayerStyle = useSpring({
    height: `${menuInDarkmode ? '100%' : '0'})`,
    from: { height: '0%' },
    config: config.stiff,
  })
  const currentPage = currentUri.slice(1).toUpperCase() || 'ABOUT'

  return (
    <nav>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} key={key}>
              <MobileMenu
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMenuButtonStyle={mobileMenuButtonStyle}
                logo={logo.childImageSharp.fixed}
                currentUri={currentUri}
              />
            </animated.div>
          )
      )}
      <div
        className={`ah-menu-placeholder-when-sticky ${
          menuInDarkmode ? 'ah-menu-placeholder-when-sticky--active' : ''
        }`}
      />
      <div
        className={`ah-menu-wrapper-outer ${
          menuInDarkmode ? 'ah-menu-wrapper-outer--darkmode' : ''
        }`}
      >
        <animated.div
          className={`ah-menu-darkmode-layer${
            menuInDarkmode ? '' : '--inactive'
          }`}
          style={menuDarkmodeLayerStyle}
        />
        <div
          className="ah-menu-wrapper-inner"
          style={{
            justifyContent: `${menuInDarkmode ? 'space-between' : 'flex-end'}`,
          }}
        >
          <div
            className="ah-menu-leftside-wrapper"
            style={{
              display: `${menuInDarkmode ? 'block' : 'none'}`,
            }}
          >
            <Link to="/">
              <Img
                fixed={logo.childImageSharp.fixed}
                className="ah-menu-logo"
              />
            </Link>
            <a role="button" href="#top">
              <FaArrowAltCircleUp className="ah-menu-icon-up" />
            </a>
          </div>
          {menuInDarkmode && (
            <span className="ah-menu-page-title">{currentPage}</span>
          )}

          <DesktopMenu
            currentUri={currentUri}
            menuInDarkmode={menuInDarkmode}
          />

          <div className="ah-mobile-menu-button-wrapper">
            <animated.button
              type="button"
              className={`ah-mobile-menu-button-external ${
                menuInDarkmode ? 'ah-mobile-menu-button-external--darkmode' : ''
              }`}
              style={mobileMenuButtonStyle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MdClose />
            </animated.button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
