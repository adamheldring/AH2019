import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'
import scrollToTop from '../../helpers/scrollToTop'

const NewsArticle = ({
  title,
  date,
  path,
  html,
  excerpt,
  featuredImage,
  photoCredit,
}) => (
  <ArticleWrapper title={date} singlePageLink={path}>
    {featuredImage && (
      <section
        className="ah-article-visual--image-wide-container"
        style={{ position: 'relative' }}
      >
        <Link onClick={scrollToTop} to={path}>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </Link>
        {photoCredit && (
          <div
            className="ah-article-visual-credit"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          >
            {photoCredit}
          </div>
        )}
      </section>
    )}
    <section className="ah-article-info-wrapper ah-article--news">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--block">
        <h2 className="ah-article-info-paragraph-heading ah-article-info-paragraph-heading--space">
          <Link onClick={scrollToTop} to={path}>
            {title}
          </Link>
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="ah-article--news-markup-wrapper"
        />
      </div>
    </section>
  </ArticleWrapper>
)

export default NewsArticle
