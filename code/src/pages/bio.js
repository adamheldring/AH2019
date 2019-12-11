import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Fragment>
    <SEO title="biography" />
    <h1>Bio</h1>
    <p>Thinking about New York...</p>

    <div className="ah-page">
      <h5>(Gatsby image query example)</h5>
      <Image />
    </div>
  </Fragment>
)

export default SecondPage
