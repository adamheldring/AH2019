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
    <SEO title="Press" />
    <div className="ah-page">
      <PressPhotosArticle />
      <BiographyArticle portrait={data.portrait} />
      <CoverArtArticle />
      <PressContactArticle pressLogo={data.tennislogoblack} />
      <SocialMediaArticle />
    </div>
  </Fragment>
)

export default PressPage

export const imageQuery = graphql`
  query {
    ymcover: file(relativePath: { eq: "covers/ah-youmore-single-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
    tennislogoblack: file(
      relativePath: { eq: "materials/tennis-logo-trans-black.png" }
    ) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
