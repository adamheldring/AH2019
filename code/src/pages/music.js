import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import ReleaseArticle from '../components/Article/ReleaseArticle'
import SEO from '../components/seo'
import releaseData from '../../data/releaseData'

const { releases } = releaseData

const MusicPage = ({ data }) => (
  <Fragment>
    <SEO title="Music" />
    <div className="ah-page">
      <div>
        <ul>
          {releases.map((releaseItem, index) => (
            <ReleaseArticle
              key={`${index}-${releaseItem.title}`}
              release={releaseItem}
              coverFluid={data[releaseItem.coverName].childImageSharp.fluid}
            />
          ))}
        </ul>
      </div>
    </div>
  </Fragment>
)

export default MusicPage

export const imageQuery = graphql`
  query {
    ymcover: file(relativePath: { eq: "covers/ah-youmore-single-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tncover: file(relativePath: { eq: "covers/ah-true_north-ep-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mfcover: file(
      relativePath: { eq: "covers/ah-mount_foreverest-album-cover.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mcover: file(relativePath: { eq: "covers/ah-metro-ep-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
