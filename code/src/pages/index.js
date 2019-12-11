import React, { Fragment } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    {/* <h1>WHAT'S NEW?</h1> */}
    <div className="ah-page">
      {/* <img src="http://placekitten.com/200/300" /> */}

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
    </div>
  </Fragment>
)

export default IndexPage
