import React from 'react'
import Link from 'gatsby'
import './ArticleWrapper.sass'

const ArticleWrapper = props => {
  const { children, title, split = false, singlePageLink = null } = props
  return (
    <section className="ah-article-wrapper">
      <div
        className={`ah-article-title ${
          singlePageLink ? 'ah-article-title--link' : ''
        }`}
      >
        {title}
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
