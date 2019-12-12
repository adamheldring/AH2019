import React from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import menuData from '../../data/menuData'

const Menu = () => {
  const [menuRef, menuInView, menuEntry] = useInView({ threshold: 1 })
  const menuStyle = useSpring({
    opacity: `${menuInView ? '1' : '0'}`,
    from: { opacity: '1' },
  })
  
  return (
    <nav className="ah-menu">
      <animated.ul className="ah-menu-list" style={menuStyle} ref={menuRef}>
        {menuData.map((menuItem, index) => (
          <li key={`${index}-${menuItem.title}`}>
            <Link to={menuItem.url} className="ah-menu-list-item">
              {menuItem.title}
            </Link>
          </li>
        ))}
      </animated.ul>
      <animated.div
        style={{
          background: 'pink',
          position: `fixed`,
          display: `${menuInView ? 'none' : 'inline'}`,
          top: '0px',
          left: '0px',
          width: '100%',
        }}
      >
        test
      </div>
    </nav>
  )
}

export default Menu
