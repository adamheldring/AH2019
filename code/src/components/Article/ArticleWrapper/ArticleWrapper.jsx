import React, { Fragment } from 'react'
import './ArticleWrapper.sass'

const ArticleWrapper = props => {
  const { children, title, split = false } = props
  return (
    <Fragment>
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
        {/* If children is an array then filter for fold-out-section, otherwise render children as is */}
        <div className={`${split ? 'ah-article--split' : ''}`}>
          {children.length
            ? children.filter(
                child => child.props['data-purpose'] !== 'fold-out'
              )
            : children}
        </div>
        <div>
          {children.length &&
            children.find(child => child.props['data-purpose'] === 'fold-out')}
        </div>
      </section>
    </Fragment>
  )
}

export default ArticleWrapper
