import React, { useState } from 'react'
import Img from 'gatsby-image'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ReleaseArticle = ({ release, coverFluid, articleTitle = '' }) => {
  const [foldOutIsVisible, setFoldOutIsVisible] = useState(false)
  return (
    <ArticleWrapper
      title={articleTitle.toUpperCase() || release.format.toUpperCase()}
      split
    >
      <section className="ah-article-visual--image-square-outer-container ah-article--split-section">
        <div className="ah-article-visual--image-square-inner-container">
          <Img fluid={coverFluid} />
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
            {foldOutIsVisible ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      </section>
      <section
        data-purpose="fold-out"
        className={`ah-article-fold-out-section ${
          foldOutIsVisible ? 'ah-article-fold-out-section--visible' : ''
        }`}
      >
        <div className="ah-article--split-section">
          <iframe
            title={release.title}
            src={release.spotifyLink}
            width="100%"
            height="425"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>
    </ArticleWrapper>
  )
}

export default ReleaseArticle
