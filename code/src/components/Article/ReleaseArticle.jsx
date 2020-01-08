import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ReleaseArticle = ({ release, coverFluid, articleTitle = '' }) => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      chevrondown: file(relativePath: { eq: "materials/chevron-down.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chevronup: file(relativePath: { eq: "materials/chevron-up.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [foldOutIsVisible, setFoldOutIsVisible] = useState(false)
  return (
    <ArticleWrapper
      title={articleTitle.toUpperCase() || release.format.toUpperCase()}
      split
    >
      <section className="ah-article-visual--image-square-outer-container ah-article--split-section">
        <div
          className="ah-article-visual--image-square-inner-container"
          style={{ position: 'relative' }}
        >
          <Img fluid={coverFluid} />
          <div
            style={{
              height: `${foldOutIsVisible ? release.playerHeight : '0'}px`,
              overflow: 'hidden',
            }}
          >
            <iframe
              title={release.title}
              src={release.spotifyLink}
              width="100%"
              height={release.playerHeight}
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="ah-article-info-wrapper ah-article--split-section">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
          <h2 className="ah-article-info-paragraph-heading">{release.title}</h2>
          <span>
            Format: {release.format}
            <br />
          </span>
          <span>
            Year: {release.year}
            <br />
          </span>
          <span>
            Label: {release.label}
            <br />
          </span>
          <button
            type="button"
            onClick={() => {
              setFoldOutIsVisible(!foldOutIsVisible)
            }}
            className="ah-article-fold-out-trigger"
          >
            <Img
              className="ah-article-fold-out-trigger-icon"
              fluid={
                data[foldOutIsVisible ? 'chevronup' : 'chevrondown']
                  .childImageSharp.fluid
              }
            />
          </button>
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default ReleaseArticle
