import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Index</h1>
    <p>New home of AH.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="http://placekitten.com/200/300"/>
    </div>
  </Layout>
)

export default IndexPage
