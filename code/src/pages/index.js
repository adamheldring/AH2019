import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import ReleaseArticle from '../components/Article/ReleaseArticle'
import ContactArticle from '../components/Article/ContactArticle'
import releaseData from '../../data/releaseData'
import SocialMediaArticle from '../components/Article/SocialMediaArticle'
import BiographyArticle from '../components/Article/BiographyArticle'
import VideoArticle from '../components/Article/VideoArticle'
import TourArticle from '../components/Article/TourArticle'
import tourData from '../../data/tourData'
import { timeCheckShows } from '../helpers/timeCheckShows'

import videoData from '../../data/videoData'

const latestRelease = releaseData.releases[0]
const latestVideo = videoData.videos.find(
  video => video.youTubeVideoCode === 'hP7B0h3oIdk'
)

const IndexPage = ({ data }) => {
  const { future } = timeCheckShows(tourData.shows)
  return (
    <Fragment>
      <SEO title="ABOUT" />
      <div className="ah-page">
        {latestVideo && (
          <VideoArticle
            videoLabel="LATEST VIDEO"
            metaTitle={latestVideo.metaTitle}
            youTubeVideoCode={latestVideo.youTubeVideoCode}
            title={latestVideo.title}
            description={latestVideo.description}
          />
        )}
        <ReleaseArticle
          release={latestRelease}
          coverFluid={data[latestRelease.coverName].childImageSharp.fluid}
          articleTitle="LATEST RELEASE"
        />
        {future.length > 0 && (
          <TourArticle
            title="NEXT SHOW"
            shows={future.slice(future.length - 1)}
          />
        )}
        <BiographyArticle portrait={data.portrait} />
        <ContactArticle
          tennislogo={data.tennislogoblack}
          mediahorselogo={data.mediahorselogo}
        />
        <SocialMediaArticle />
      </div>
    </Fragment>
  )
}

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
