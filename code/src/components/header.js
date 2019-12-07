import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'
import './MobileMenu/MobileMenu.sass'

const Header = ({ siteTitle, setMobileMenuOpen }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `0`,
    }}
  >
    <div>
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: '15rem',
          lineHeight: 0.65,
        }}
      >
        <Link
          to="/"
          style={{
            margin: 0,
            padding: 0,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          ADAM
        </Link>
      </h1>
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: '15rem',
          display: `flex`,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          lineHeight: '0.7',
        }}
      >
        <Link
          to="/"
          style={{
            margin: 0,
            padding: 0,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          HELDRING
        </Link>
      </h1>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 2rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <button
        type="button"
        className="mobile-menu__button"
        style={{ fontSize: '50px' }}
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
