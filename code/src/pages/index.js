import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import { ArticleWrapper } from "../components/ArticleWrapper/ArticleWrapper"

const IndexPage = ({ data }) => {
  return (
    <Fragment>
      <SEO title="Home" />
      <div className="ah-page">
        <ArticleWrapper title={"LATEST VIDEO"}>
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
          <section 
            className="ah-article-info-wrapper"
          >
            <p className="ah-article-info-paragraph">
              <h2 className="ah-article-info-paragraph-heading">You / More</h2>
            </p>
          </section>
        </ArticleWrapper>
        <ArticleWrapper title="LATEST RELEASE" split={true}>
          <section className="ah-article-visual--image-outer-container ah-article--split-section">
            <div className="ah-article-visual--image-inner-container">
              <Img fluid={data.ymcover.childImageSharp.fluid} />
            </div>
          </section>
          <section className="ah-article-info-wrapper ah-article--split-section">
            <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
              <h2 className="ah-article-info-paragraph-heading">You / More</h2>
              <span>Format: Single<br/></span>
              <span>Year: 2019<br/></span>
              <span>Label: Tennis<br/></span>
            </p>
          </section>
        </ArticleWrapper>
      </div>
    </Fragment>
  )
}

export default IndexPage

export const imageQuery = graphql`
  query {
    ymcover: file(
      relativePath: { eq: "materials/covers/ah-youmore-single-cover.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`