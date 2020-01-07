import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './Footer.sass'
import menuData from '../../../data/menuData'

const Footer = ({ labelLogo }) => {
  console.log(menuData)
  return (
    <footer className="ah-footer">
      <div className="ah-footer-content">
        <div className="ah-footer-content-box">
          <a className="ah-footer-link" href="https://www.gatsbyjs.org">
            <Img fixed={labelLogo.childImageSharp.fixed} />
          </a>
          <span>Tennis Music</span>
          {/* <span>tennismusic.net</span> */}
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="ah-footer-content-box ah-footer-content-box--center">
          <span>
            <b>INFO</b>
          </span>
          {menuData.submenu.map(submenuItem => (
            <Link to={submenuItem.url}>{submenuItem.title}</Link>
          ))}
        </div>
        <div className="ah-footer-content-box ah-footer-content-box--right">
          <span>
            <b>MENU</b>
          </span>
          {menuData.menu.map(menuItem => (
            <Link to={menuItem.url}>{menuItem.title}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
