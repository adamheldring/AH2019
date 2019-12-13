/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useTransition, animated, config } from 'react-spring'
import { MdMenu } from 'react-icons/md'
import Header from './header'
import Menu from './menu'
import MobileMenu from './MobileMenu/MobileMenu'
import './MobileMenu/MobileMenu.sass'
import './layout.css'
import './ah2019.sass'

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
  const transitions = useTransition(mobileMenuOpen, null, {
    from: { marginLeft: '100vw' },
    enter: { marginLeft: '0' },
    leave: { marginLeft: '100vw' },
    config: config.stiff,
  })

  console.log('MMOpen?: ', mobileMenuOpen)
  return (
    <div className="ah-outer-wrapper">
      <Header
        siteTitle={data.site.siteMetadata.title}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} key={key}>
              <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </animated.div>
          )
      )}
      <div className="ah-inner-wrapper">
        <div className="ah-menu-wrapper">
          <Menu />
          <div className="ah-header-mobile-menu-button-wrapper">
            <button
              type="button"
              className="mobile-menu__button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
        </div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          <a href="https://www.gatsbyjs.org">Tennis Music</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
