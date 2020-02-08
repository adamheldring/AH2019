import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, useTransition, animated, config } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import smoothscroll from 'smoothscroll-polyfill'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'
import scrollToTop from '../../helpers/scrollToTop'
import './Menu.sass'
import './MobileMenu/MobileMenu.sass'
import menuData from '../../../data/menuData'

const Menu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  menuInDarkmode,
  currentUri,
  logo,
  scrollUpAnchorRef,
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
  const getCurrentPageTitle = () => {
    let pageName = ''
    if (menuData.menu.find(item => item.url === currentUri)) {
      // Check if current page is a menu item
      pageName = menuData.menu
        .find(item => item.url === currentUri)
        .title.toUpperCase()
    } else if (menuData.submenu.find(item => item.url === currentUri)) {
      // Check if current page is a submenu item
      pageName = menuData.submenu
        .find(item => item.url === currentUri)
        .title.toUpperCase()
    } else {
      // Otherwise current page must be a full page single article
      pageName = 'ARTICLE'
    }
    return pageName
  }
  const [smoothScrollIsPolyfilled, setSmoothScrollIsPolyfilled] = useState(
    false
  )
  if (typeof window !== 'undefined' && !smoothScrollIsPolyfilled) {
    smoothscroll.polyfill()
    setSmoothScrollIsPolyfilled(true)
  }

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
                menuInDarkmode={menuInDarkmode}
                scrollUpAnchorRef={scrollUpAnchorRef}
              />
            </animated.div>
          )
      )}
      <div
        ref={scrollUpAnchorRef}
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
            <FaArrowAltCircleUp
              className="ah-menu-icon-up"
              onClick={() => scrollToTop({ behaviorType: 'smooth' })}
            />
          </div>
          {menuInDarkmode && (
            <span className="ah-menu-page-title">{getCurrentPageTitle()}</span>
          )}

          <DesktopMenu
            currentUri={currentUri}
            menuInDarkmode={menuInDarkmode}
            scrollUpAnchorRef={scrollUpAnchorRef}
            isCurrentPageSingleArticle={getCurrentPageTitle() === 'ARTICLE'}
          />

          <div
            className="ah-mobile-menu-button-wrapper"
            style={menuInDarkmode ? {} : { width: '100%' }}
          >
            {!menuInDarkmode && (
              <Fragment>
                <div style={{ width: '63px' }} />
                <h1 className="ah-menu-pagename-text">
                  {getCurrentPageTitle()}
                </h1>
              </Fragment>
            )}
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
