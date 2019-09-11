import React from "react"
import { Link } from "gatsby"
import menuData from "../../data/menuData"

const Menu = () => {
  return(
    <nav style={{ backgroundColor: "pink"}}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly" }}>
        {menuData.map(menuItem => (
          <li><Link to={menuItem.url}>{menuItem.title}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu