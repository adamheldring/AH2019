/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Menu from './Menu/Menu'
import './layout.css'
import './ah2019.sass'
import './mediaQueries.sass'

require('intersection-observer')

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "materials/ahlogotransshadow.png" }) {
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

  return (
    <div className="ah-outer-wrapper">
      <Header
        siteTitle={data.site.siteMetadata.title}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setMenuInDarkmode={setMenuInDarkmode}
      />
      <Menu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        menuInDarkmode={menuInDarkmode}
        currentUri={children.props.uri}
        logo={data.logo}
      />
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
