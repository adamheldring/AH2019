import React from 'react'
import './Footer.sass'

const Footer = () => (
  <footer className="ah-footer">
    <div className="ah-inner-wrapper ah-inner-wrapper--dark">
      © {new Date().getFullYear()},{' '}
      <a className="ah-footer-link" href="https://www.gatsbyjs.org">
        Tennis Music
      </a>
    </div>
  </footer>
)

export default Footer
