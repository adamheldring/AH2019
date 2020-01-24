import React from 'react'
import { Link } from 'gatsby'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const NewsArticle = ({ title, date, path, html, excerpt }) => (
  <ArticleWrapper title={date} singlePageLink={path}>
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--block">
        <h2 className="ah-article-info-paragraph-heading ah-article-info-paragraph-heading--space">
          <Link onClick={() => window.scroll({ top: 0, left: 0 })} to={path}>
            {title}
          </Link>
        </h2>
        <p style={{ marginBottom: '20px' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </p>
      </div>
    </section>
  </ArticleWrapper>
)

export default NewsArticle
