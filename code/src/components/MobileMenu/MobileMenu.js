import React from "react"
import { Link } from "gatsby"
import menuData from "../../../data/menuData"

const MobileMenu = ({ setMobileMenuOpen }) => {
  return (
    <div className="mobile-menu" style={{
      height: "100vh",
      width: "100vw",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
      background: "green",
      opacity: "0.9",
      border: "4px solid blue",
      boxSizing: "border-box"


    }}>
      <h1 style={{ margin: "0"}}>MOBILE MENU</h1>
      <ul style={{ listStyle: "none" }}>
        {menuData.map(menuItem => (
          <li>
            <Link to={menuItem.url}>
              <h2>{menuItem.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <h2 style={{ color: "white" }} onClick={() => setMobileMenuOpen(false)}>CLOSE</h2>
    </div>
  )
}

export default MobileMenu