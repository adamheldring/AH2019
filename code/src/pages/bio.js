import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="biography" />
    <h1>Bio</h1>
    <p>Thinking about New York...</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h5>(Gatsby image query example)</h5>
      <Image />
    </div>
  </Layout>
)

export default SecondPage
