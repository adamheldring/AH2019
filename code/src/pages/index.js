import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import { ArticleWrapper } from "../components/ArticleWrapper/ArticleWrapper"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <SEO title="Home" />
      <div className="ah-page">
        <ArticleWrapper title={"LATEST VIDEO"}>
          <section className="ah-video-wrapper">
            <iframe
              title="You/More video"
              className="ah-video"
              src="https://www.youtube.com/embed/hP7B0h3oIdk?loop=1&playList=hP7B0h3oIdk&modestbranding"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section style={{ padding: "20px", fontSize: "14px" }}>
            <p style={{ margin: "0" }}>"You / More" video</p>
          </section>          
        </ArticleWrapper>
        <ArticleWrapper title="LATEST RELEASE">
          <section style={{ display: "flex", margin: "20px 20px 0 20px", justifyContent: "center"}}>
            <div style={{ width: '100%', margin: "0px" }}>
              <Img fluid={data.ymcover.childImageSharp.fluid} />
            </div>
          </section>
          <section style={{ padding: "20px", fontSize: "14px", display: "flex", justifyContent: "center" }}>
            <p style={{ margin: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span><h3 style={{ marginBottom: "10px", fontStyle: "normal"}}>You / More</h3></span>
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