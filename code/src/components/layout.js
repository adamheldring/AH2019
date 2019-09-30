/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useTransition, animated, config } from 'react-spring'

import Header from './header'
import Menu from './menu'
import MobileMenu from './MobileMenu/MobileMenu'
import './layout.css'

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
    <Fragment>
      <Header
        siteTitle={data.site.siteMetadata.title}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Menu />
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},{` `}
          <a href="https://www.gatsbyjs.org">Tennis Music</a>
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
