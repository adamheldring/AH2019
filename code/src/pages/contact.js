import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import SocialMediaArticle from '../components/Article/SocialMediaArticle'
import ContactArticle from '../components/Article/ContactArticle'

const ContactPage = ({ data }) => (
  <Fragment>
    <SEO title="CONTACT" />
    <div className="ah-page">
      <ContactArticle
        tennislogo={data.tennislogoblack}
        mediahorselogo={data.mediahorselogo}
        ileslogo={data.ileslogo}
      />
      <SocialMediaArticle />
    </div>
  </Fragment>
)

export default ContactPage

export const imageQuery = graphql`
  query {
    tennislogoblack: file(
      relativePath: { eq: "materials/tennis-logo-trans-black.png" }
    ) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mediahorselogo: file(
      relativePath: { eq: "materials/media-horse-logo.png" }
    ) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
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
