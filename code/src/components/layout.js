/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, useTransition, animated, config } from 'react-spring'
import { MdClose } from 'react-icons/md'
import Header from './header'
import Menu from './menu'
import MobileMenu from './MobileMenu/MobileMenu'
import './MobileMenu/MobileMenu.sass'
import './layout.css'
import './ah2019.sass'

require('intersection-observer')

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuInDarkmode, setMenuInDarkmode] = useState(false)
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
    width: `${menuInDarkmode ? '100vw' : '0'})`,
    opacity: `${menuInDarkmode ? '1' : '0'})`,
    from: { width: '0%', opacity: '0' },
  })

  return (
    <div className="ah-outer-wrapper">
      <Header
        siteTitle={data.site.siteMetadata.title}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setMenuInDarkmode={setMenuInDarkmode}
      />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} key={key}>
              <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMenuButtonStyle={mobileMenuButtonStyle}
              />
            </animated.div>
          )
      )}
      <div
        // className={`ah-menu-wrapper-outer ${
        //   menuInDarkmode ? 'ah-menu-wrapper-outer--darkmode' : ''
        // }`}
        className="ah-menu-wrapper-outer"
      >
        <animated.div
          className="ah-menu-darkmode-layer"
          style={menuDarkmodeLayerStyle}
        />
        <div
          className="ah-menu-wrapper-inner"
          style={{
            justifyContent: `${menuInDarkmode ? 'space-between' : 'flex-end'}`,
          }}
        >
          <div
            style={{
              display: `${menuInDarkmode ? 'block' : 'none'}`,
            }}
          >
            AH
          </div>
          <Menu />
          <div className="ah-mobile-menu-button-wrapper">
            <animated.button
              type="button"
              className={`mobile-menu__button ${
                menuInDarkmode ? 'mobile-menu__button--darkmode' : ''
              }`}
              style={mobileMenuButtonStyle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MdClose />
            </animated.button>
          </div>
        </div>
      </div>
      <div className="ah-inner-wrapper">
        <main>{children}</main>
      </div>
      <footer>
        <div className="ah-inner-wrapper">
          © {new Date().getFullYear()},
          <a href="https://www.gatsbyjs.org">Tennis Music</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
