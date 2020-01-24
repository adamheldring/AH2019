import React from 'react'
import { Link } from 'gatsby'
import './ArticleWrapper.sass'

const ArticleWrapper = props => {
  const { children, title, split = false, singlePageLink = false } = props
  return (
    <section className="ah-article-wrapper">
      <div className="ah-article-title">
        <span
          className="ah-article-title-text"
          style={{ width: `${singlePageLink ? '50%' : '100%'}` }}
        >
          {title}
        </span>
        {singlePageLink && (
          <Link
            onClick={() => window.scroll({ top: 0, left: 0 })}
            to={singlePageLink}
          >
            <span className="ah-article-title-link">FULL PAGE</span>
          </Link>
        )}
      </div>
      <div className={`${split ? 'ah-article--split' : ''}`}>
        {children.length
          ? children.filter((child, index) => index < 2)
          : children}
      </div>
      {children.length >= 3 && children.filter((child, index) => index >= 2)}
    </section>
  )
}

export default ArticleWrapper
