import React from 'react'
import Img from 'gatsby-image'
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
            <span>{submenuItem.title}</span>
          ))}
        </div>
        <div className="ah-footer-content-box ah-footer-content-box--right">
          <span>
            <b>MENU</b>
          </span>
          {menuData.menu.map(menuItem => (
            <span>{menuItem.title}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
