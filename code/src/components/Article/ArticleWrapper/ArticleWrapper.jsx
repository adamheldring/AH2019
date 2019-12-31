import React from 'react'
import './ArticleWrapper.sass'

const ArticleWrapper = props => {
  const { children, title, split = false } = props
  return (
    <section className="ah-article-wrapper">
      <div
        className="ah-article-title"
        style={{
          backgroundColor: '#DDDDDD',
          color: '#333333',
          margin: '0',
          height: '50px',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '0.1rem',
          fontSize: '14px',
        }}
      >
        {title}
      </div>
      <div className={`${split ? 'ah-article--split' : ''}`}>{children}</div>
    </section>
  )
}

export default ArticleWrapper
