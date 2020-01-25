import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ReleaseArticle = ({ release, coverFluid, articleTitle = '' }) => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      chevrondown: file(relativePath: { eq: "materials/chevron-down.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      chevronup: file(relativePath: { eq: "materials/chevron-up.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [foldOutIsVisible, setFoldOutIsVisible] = useState(false)
  const foldOutPlayerStyle = useSpring({
    height: `${foldOutIsVisible ? release.playerHeight : '0'}px`,
  })

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
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setFoldOutIsVisible(!foldOutIsVisible)
            }}
          >
            <Img fluid={coverFluid} />
          </div>
          <animated.div
            className="ah-article-fold-out-player-wrapper"
            style={foldOutPlayerStyle}
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
          </animated.div>
        </div>
      </section>
      <section className="ah-article-info-wrapper ah-article--split-section">
        <div className="ah-article-info-paragraph ah-article-info-paragraph--list ah-article-info-paragraph--release-info">
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
              fixed={
                data[foldOutIsVisible ? 'chevronup' : 'chevrondown']
                  .childImageSharp.fixed
              }
            />
          </button>
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default ReleaseArticle
