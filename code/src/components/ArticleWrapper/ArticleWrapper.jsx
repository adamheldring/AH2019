import React from "react"

export const ArticleWrapper = (props) => {
  const {children, title} = props
  return (
    <section style={{ boxShadow: "2px 2px 6px #CCCCCC", marginBottom: "40px" }}>
      <div style={{ backgroundColor: "#DDDDDD", color: "#333333", margin: "0", height: "50px", padding: "0 20px", display: "flex", alignItems: "center", letterSpacing: "0.1rem", fontSize: "14px" }}>{title}</div>
      <div>
        {children}
      </div>
    </section>
  )
}