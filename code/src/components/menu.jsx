import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return(
    <nav style={{ backgroundColor: "pink"}}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bio">Bio</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </nav>
  )
}

export default Menu