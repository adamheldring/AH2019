import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import ArticleWrapper from '../components/Article/ArticleWrapper/ArticleWrapper'
import ReleaseArticle from '../components/Article/ReleaseArticle'
import ContactArticle from '../components/Article/ContactArticle'
import releaseData from '../../data/releaseData'
import SocialMediaArticle from '../components/Article/SocialMediaArticle'
import BiographyArticle from '../components/Article/BiographyArticle'

const latestRelease = releaseData.releases[0]

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO title="ABOUT" />
    <div className="ah-page">
      <ArticleWrapper title="LATEST VIDEO">
        <section className="ah-article-visual--video-container">
          <iframe
            title="You/More video"
            className="ah-article-visual--video"
            src="https://www.youtube.com/embed/hP7B0h3oIdk?loop=1&playList=hP7B0h3oIdk&modestbranding"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">You / More</h2>
            <span>From upcoming full album</span>
          </p>
        </section>
      </ArticleWrapper>
      <ReleaseArticle
        release={latestRelease}
        coverFluid={data[latestRelease.coverName].childImageSharp.fluid}
        articleTitle="LATEST RELEASE"
      />
      <BiographyArticle portrait={data.portrait} />
      <ContactArticle
        tennislogo={data.tennislogoblack}
        mediahorselogo={data.mediahorselogo}
      />
      <SocialMediaArticle />
    </div>
  </Fragment>
)

export default IndexPage

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
    mediahorselogo: file(
      relativePath: { eq: "materials/media-horse-logo.png" }
    ) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
