import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// import { MdMenu } from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import './MobileMenu/MobileMenu.sass'

const Header = ({ siteTitle, setMobileMenuOpen }) => {
  const [titleUpperRef, titleUpperInView, titleUpperEntry] = useInView({
    threshold: 0.5,
  })
  const [titleLowerRef, titleLowerInView, titleLoweEntry] = useInView({
    threshold: 0.5,
  })
  const titleLeftStyle = useSpring({
    left: `${titleUpperInView ? '0' : '-100%'}`,
    opacity: `${titleUpperInView ? '1' : '0'}`,
    from: { left: '-100%', opacity: '0' },
  })
  const titleRightStyle = useSpring({
    left: `${titleLowerInView ? '0' : '100%'}`,
    opacity: `${titleLowerInView ? '1' : '0'}`,
    from: { right: '100%', opacity: '0' },
  })

  return (
    <header className="ah-header">
      <div>
        <div className="ah-header-title-upper-wrapper" ref={titleUpperRef}>
          <animated.h1
            className="ah-header-title ah-header-title-left"
            style={titleLeftStyle}
          >
            <Link to="/" className="ah-header-title-link">
              {/* {siteTitle} */}A
              <span className="ah-header-title-left-da-kerning">D</span>AM
            </Link>
          </animated.h1>
          {/* <div className="ah-header-mobile-menu-button-wrapper">
            <button
              type="button"
              className="mobile-menu__button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MdMenu />
            </button>
          </div> */}
        </div>
        <div ref={titleLowerRef}>
          <animated.h1
            className="ah-header-title ah-header-title-right"
            style={titleRightStyle}
          >
            <Link to="/" className="ah-header-title-link">
              {/* {siteTitle} */}
              HELDRING
            </Link>
          </animated.h1>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
