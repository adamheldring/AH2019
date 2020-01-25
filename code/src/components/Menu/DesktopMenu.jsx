import React from 'react'
import { Link } from 'gatsby'
import scrollToAnchorPoint from '../../helpers/scrollToAnchorPoint'
import menuData from '../../../data/menuData'

const Menu = ({
  currentUri,
  menuInDarkmode,
  scrollUpAnchorRef,
  isCurrentPageSingleArticle = false,
}) => {
  const activeSubmenuItem = menuData.submenu.find(
    submenuItem => submenuItem.url === currentUri
  )
  return (
    <div className="ah-menu">
      <ul className="ah-menu-list">
        {isCurrentPageSingleArticle && (
          <li className="ah-menu-list-item-wrapper">
            <Link
              onClick={() =>
                scrollToAnchorPoint(scrollUpAnchorRef, menuInDarkmode)
              }
              to={currentUri}
              className={`ah-menu-list-item ah-menu-list-submenu-item--active ${
                menuInDarkmode
                  ? 'ah-menu-list-submenu-item--active--darkmode'
                  : ''
              }`}
            >
              ARTICLE
            </Link>
          </li>
        )}

        {activeSubmenuItem && (
          <li className="ah-menu-list-item-wrapper">
            <Link
              onClick={() =>
                scrollToAnchorPoint(scrollUpAnchorRef, menuInDarkmode)
              }
              to={activeSubmenuItem.url}
              className={`ah-menu-list-item ah-menu-list-submenu-item--active ${
                menuInDarkmode
                  ? 'ah-menu-list-submenu-item--active--darkmode'
                  : ''
              }`}
            >
              {activeSubmenuItem.title.toUpperCase()}
            </Link>
          </li>
        )}
        {menuData.menu.map((menuItem, index) => (
          <li
            key={`${index}-${menuItem.title}`}
            className="ah-menu-list-item-wrapper"
          >
            <Link
              onClick={() =>
                scrollToAnchorPoint(scrollUpAnchorRef, menuInDarkmode)
              }
              to={menuItem.url}
              className={`ah-menu-list-item ${
                menuItem.url === currentUri ? 'ah-menu-list-item--active' : ''
              } ${menuInDarkmode ? 'ah-menu-list-item--darkmode' : ''}`}
            >
              {menuItem.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
