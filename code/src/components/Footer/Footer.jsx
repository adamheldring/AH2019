import React from 'react'
import Img from 'gatsby-image'
import './Footer.sass'

const Footer = ({ labelLogo }) => (
  <footer className="ah-footer">
    <div className="ah-footer-content">
      <div className="ah-footer-content-box">
        <a className="ah-footer-link" href="https://www.gatsbyjs.org">
          <Img fixed={labelLogo.childImageSharp.fixed} />
        </a>
        <span>Tennis Music</span>
        <span>tennismusic.net</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="ah-footer-content-box ah-footer-content-box--center">
        <span>
          <b>INFO</b>
        </span>
        <span>Press</span>
        <span>Contact</span>
      </div>
      <div className="ah-footer-content-box ah-footer-content-box--right">
        <span>
          <b>MENU</b>
        </span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </div>
    </div>
  </footer>
)

export default Footer
