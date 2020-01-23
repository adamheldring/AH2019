/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import './layout.css'
import './ah2019.sass'
import './mediaQueries.sass'

require('intersection-observer')

const Layout = ({ children }) => {
  const scrollUpAnchorRef = useRef(null)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      ahlogo: file(relativePath: { eq: "materials/ahlogotransshadow.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tennislogowhite: file(
        relativePath: { eq: "materials/tennis-logo-trans-white.png" }
      ) {
        childImageSharp {
          fixed(height: 14) {
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
        logo={data.ahlogo}
        scrollUpAnchorRef={scrollUpAnchorRef}
      />
      <div className="ah-inner-wrapper">
        <main>{children}</main>
      </div>
      <Footer
        labelLogo={data.tennislogowhite}
        currentUri={children.props.uri}
        scrollUpAnchorRef={scrollUpAnchorRef}
      />
    </div>
  )
}

export default Layout
