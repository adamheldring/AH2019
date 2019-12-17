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
import Img from 'gatsby-image'
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
      logo: file(relativePath: { eq: "materials/ahlogotrans.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
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
    height: `${menuInDarkmode ? '100%' : '0'})`,
    from: { height: '0%' },
    config: config.stiff,
  })

  const currentPage = children.props.uri.slice(1).toUpperCase() || 'HOME'

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
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMenuButtonStyle={mobileMenuButtonStyle}
                logo={data.logo.childImageSharp.fixed}
                currentUri={children.props.uri}
              />
            </animated.div>
          )
      )}
      <div className="ah-menu-wrapper-outer">
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
            style={{
              display: `${menuInDarkmode ? 'block' : 'none'}`,
            }}
          >
            <Img
              fixed={data.logo.childImageSharp.fixed}
              className="ah-menu-logo"
            />
          </div>
          {menuInDarkmode && (
            <span className="ah-menu-page-title">{currentPage}</span>
          )}
          <Menu currentUri={children.props.uri} menuInDarkmode={menuInDarkmode}/>
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
      <div className="ah-inner-wrapper">
        <main>{children}</main>
      </div>
      <footer>
        <div className="ah-inner-wrapper">
          © {new Date().getFullYear()},{' '}
          <a href="https://www.gatsbyjs.org">Tennis Music</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
