import React from 'react'
import Img from 'gatsby-image'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const ReleaseArticle = ({ release, coverFluid, articleTitle = '' }) => (
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
      </div>
    </section>
  </ArticleWrapper>
)

export default ReleaseArticle
