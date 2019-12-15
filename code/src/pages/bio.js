import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Image from '../components/image'

import SEO from '../components/seo'

const SecondPage = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <SEO title="biography" />
      <h1>Bio</h1>
      <p>Thinking about New York...</p>

      <div className="ah-page">
        <h5>(Gatsby image query example)</h5>
        <Img fluid={data.preston.childImageSharp.fluid} />
        <Img fluid={data.logo.childImageSharp.fluid} />
        <Image />
      </div>
    </Fragment>
  )
}

export default SecondPage

export const logoQuery = graphql`
  query {
    preston: file(relativePath: { eq: "preston.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "materials/ahlogotrans.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
