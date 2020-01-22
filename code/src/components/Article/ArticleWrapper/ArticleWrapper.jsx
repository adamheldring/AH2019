import React from 'react'
import './ArticleWrapper.sass'

const ArticleWrapper = props => {
  const { children, title, split = false } = props
  return (
    <section className="ah-article-wrapper">
      <div className="ah-article-title">
        <span className="ah-article-title-text">{title}</span>
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
