import React from 'react'
import './Footer.sass'

const Footer = () => (
  <footer className="ah-footer">
    <div className="ah-inner-wrapper ah-inner-wrapper--dark">
      <div className="ah-footer-content">
        <span>© {new Date().getFullYear()}</span>
        <a className="ah-footer-link" href="https://www.gatsbyjs.org">
          Tennis Music
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
