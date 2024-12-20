import React, { Fragment } from "react"
import { graphql } from "gatsby"
import ReleaseArticle from "../components/Article/ReleaseArticle"
import SEO from "../components/seo"
import releaseData from "../../data/releaseData"

const { releases } = releaseData

const MusicPage = ({ data }) => (
  <Fragment>
    <SEO title="MUSIC" />
    <div className="ah-page">
      {releases.map((releaseItem, index) => (
        <ReleaseArticle
          key={`${index}-${releaseItem.title}`}
          release={releaseItem}
          coverFluid={data[releaseItem.coverName].childImageSharp.fluid}
        />
      ))}
    </div>
  </Fragment>
)

export default MusicPage

export const imageQuery = graphql`
  query {
    ymremixcover: file(
      relativePath: { eq: "covers/ah-youmore-remix-cover.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    poccover: file(
      relativePath: { eq: "covers/ah-ports_of_call-album-cover.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gscover: file(
      relativePath: { eq: "covers/ah-golden-state-single-cover.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dcover: file(relativePath: { eq: "covers/ah-dance-single-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
