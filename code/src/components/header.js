import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'
import './MobileMenu/MobileMenu.sass'

const Header = ({ siteTitle, setMobileMenuOpen }) => (
  <header className="ah-header">
    <div>
      <h1 className="ah-header-title ah-header-title-left">
        <Link to="/" className="ah-header-title-link">
          {/* {siteTitle} */}
          ADAM
        </Link>
      </h1>
      <h1 className="ah-header-title ah-header-title-right">
        <Link to="/" className="ah-header-title-link">
          {/* {siteTitle} */}
          HELDRING
        </Link>
      </h1>
    </div>
    <div className="ah-header-mobile-menu-button-wrapper">
      <button
        type="button"
        className="mobile-menu__button"
        onClick={() => setMobileMenuOpen(true)}
      >
        <MdMenu />
      </button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
