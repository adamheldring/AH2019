import React from "react"

const MobileMenu = ({ setMobileMenuOpen }) => {
  return (
    <div className="mobile-menu" style={{
      height: "100vh",
      width: "100vw",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
      background: "green"

    }}>
      <h1 style={{ margin: "0"}}>MOBILE MENU</h1>
      <h2 onClick={() => setMobileMenuOpen(false)}>CLOSE</h2> 
    </div>
  )
}

export default MobileMenu