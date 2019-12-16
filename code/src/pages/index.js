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

        <article>
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
        </article>
        <article style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Img fluid={data.ymcover.childImageSharp.fluid} />
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <p>New single "You / More" released 2019</p>
          </div>
        </article>
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
