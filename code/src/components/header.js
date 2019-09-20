import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'

const Header = ({ siteTitle, mobileMenuOpen, setMobileMenuOpen }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1
        style={{
          margin: 0,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <MdMenu />
      </h1>
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
