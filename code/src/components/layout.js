/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ahContext } from '../helpers/ahContext'
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
  const [isErrorView, setIsErrorView] = useState(false)
  const ahContextObj = {
    scrollUpAnchorRef,
    menuInDarkmode,
    isErrorView,
    setIsErrorView,
  }
  useEffect(() => {
    console.log(`${'     '}___    ____  ___    __  ___   __  __________    ____  ____  _____   ________
    /   |  / __ \\/   |  /  |/  /  / / / / ____/ /   / __ \\/ __ \\/  _/ | / / ____/
   / /| | / / / / /| | / /|_/ /  / /_/ / __/ / /   / / / / /_/ // //  |/ / / __  
  / ___ |/ /_/ / ___ |/ /  / /  / __  / /___/ /___/ /_/ / _, _// // /|  / /_/ /  
 /_/  |_/_____/_/  |_/_/  /_/  /_/ /_/_____/_____/_____/_/ |_/___/_/ |_/\\____/   
                                                                                 
 `)
    console.log(`${'    '}__  ______  __  __      __   __  _______  ____  ______
    \\ \\/ / __ \\/ / / /    _/_/  /  |/  / __ \\/ __ \\/ ____/
    ${' '}\\  / / / / / / /   _/_/   / /|_/ / / / / /_/ / __/   
     / / /_/ / /_/ /  _/_/    / /  / / /_/ / _, _/ /___   
    /_/\\____/\\____/  /_/     /_/  /_/\\____/_/ |_/_____/   
                                                          
    `)
  }, [])
  return (
    <div className="ah-outer-wrapper">
      <ahContext.Provider value={ahContextObj}>
        {!isErrorView && (
          <Header
            siteTitle={data.site.siteMetadata.title}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            setMenuInDarkmode={setMenuInDarkmode}
          />
        )}
        {!isErrorView && (
          <Menu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            menuInDarkmode={menuInDarkmode}
            currentUri={children.props.uri}
            logo={data.ahlogo}
            scrollUpAnchorRef={scrollUpAnchorRef}
          />
        )}
        <div className="ah-inner-wrapper">
          <main>{children}</main>
        </div>
        {!isErrorView && (
          <Footer
            labelLogo={data.tennislogowhite}
            currentUri={children.props.uri}
            scrollUpAnchorRef={scrollUpAnchorRef}
            menuInDarkmode={menuInDarkmode}
          />
        )}
      </ahContext.Provider>
    </div>
  )
}

export default Layout
