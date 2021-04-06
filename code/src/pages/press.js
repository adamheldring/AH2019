import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import SocialMediaArticle from '../components/Article/SocialMediaArticle'
import BiographyArticle from '../components/Article/BiographyArticle'
import PressContactArticle from '../components/Article/PressContactArticle'
import PressPhotosArticle from '../components/Article/PressPhotosArticle'
import CoverArtArticle from '../components/Article/CoverArtArticle'

const PressPage = ({ data }) => (
  <Fragment>
    <SEO title="PRESS" />
    <div className="ah-page">
      <PressPhotosArticle />
      <CoverArtArticle />
      <BiographyArticle portrait={data.portrait} />
      <PressContactArticle pressLogo={data.ileslogo} />
      <SocialMediaArticle />
    </div>
  </Fragment>
)

export default PressPage

export const imageQuery = graphql`
  query {
    portrait: file(
      relativePath: {
        eq: "press/Adam_Heldring_press_2019_1_-_Photo_Andreas_Karlsson_(highres).jpg"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ileslogo: file(relativePath: { eq: "materials/iles-logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
