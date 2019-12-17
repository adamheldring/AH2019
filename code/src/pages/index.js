import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <SEO title="Home" />
      {/* <h1>WHAT'S NEW?</h1> */}
      <div className="ah-page">
        {/* <img src="http://placekitten.com/200/300" /> */}

        <CustomArticle title={"LATEST VIDEO"}>
          <div className="ah-video-wrapper">
            <iframe
              title="You/More video"
              className="ah-video"
              src="https://www.youtube.com/embed/hP7B0h3oIdk?loop=1&playList=hP7B0h3oIdk&modestbranding"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>"You / More" video</p>
        </CustomArticle>
        <CustomArticle title="LATEST RELEASE">
          <div style={{ width: '100%' }}>
            <Img fluid={data.ymcover.childImageSharp.fluid} />
          </div>
        </CustomArticle>
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

export const CustomArticle = (props) => {
  const {children, title} = props
  return (
    <article style={{ boxShadow: "2px 2px 6px #CCCCCC"}}>
      <div style={{ backgroundColor: "#DDDDDD", color: "#333333", margin: "0", height: "50px", padding: "0 20px", display: "flex", alignItems: "center", letterSpacing: "0.1rem", fontSize: "14px" }}>{title}</div>
      <div>
        {children}
      </div>
    </article>
  )
}