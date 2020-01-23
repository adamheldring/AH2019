import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './Footer.sass'
import menuData from '../../../data/menuData'

const Footer = ({ labelLogo, currentUri }) => (
  <footer className="ah-footer">
    <div className="ah-footer-content">
      <div className="ah-footer-content-box">
        <a
          className="ah-footer-tennis-logo"
          href="http://www.tennismusic.net"
          style={{ height: '26px' }}
          alt="Tennis Music"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={labelLogo.childImageSharp.fixed} />
        </a>
        <span>
          <a
            className="ah-footer-link"
            href="http://www.tennismusic.net"
            alt="Tennis Music"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tennis Music
          </a>
        </span>
        <span>
          <a
            className="ah-footer-link"
            href="http://www.tennismusic.net"
            alt="Tennis Music"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tennismusic.net
          </a>
        </span>
        <span className="test">
          <a
            to="info@tennismusic.net"
            className="ah-footer-link"
            href="mailto:info@tennismusic.net"
          >
            info@tennismusic.net
          </a>
        </span>
        <span className="test">© {new Date().getFullYear()}</span>
      </div>
      <div className="ah-footer-menu-container">
        <div className="ah-footer-content-box ah-footer-content-box--center">
          <span className="ah-footer-content-box-heading">INFO</span>
          {menuData.submenu.map(submenuItem => (
            <Link
              onClick={() => window.scroll({ top: 0, left: 0 })}
              to={submenuItem.url}
              className={`ah-footer-link ${
                submenuItem.url === currentUri ? 'ah-footer-link--active' : ''
              }`}
            >
              {submenuItem.title}
            </Link>
          ))}
        </div>
        <div className="ah-footer-content-box ah-footer-content-box--right">
          <span className="ah-footer-content-box-heading">MENU</span>
          {menuData.menu.map(menuItem => (
            <Link
              onClick={() => window.scroll({ top: 0, left: 0 })}
              to={menuItem.url}
              className={`ah-footer-link ${
                menuItem.url === currentUri ? 'ah-footer-link--active' : ''
              }`}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
