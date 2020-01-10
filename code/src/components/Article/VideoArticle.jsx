import React from 'react'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const VideoArticle = props => {
  const {
    videoLabel,
    metaTitle,
    youTubeVideoCode,
    title = '',
    description = '',
    additionalInfo = '',
  } = props
  return (
    <ArticleWrapper title={videoLabel.toUpperCase()}>
      <section className="ah-article-visual--video-container">
        <iframe
          title={metaTitle}
          className="ah-article-visual--video"
          src={`https://www.youtube.com/embed/${youTubeVideoCode}?loop=1&playList=${youTubeVideoCode}&modestbranding`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="ah-article-info-wrapper">
        <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
          {title && (
            <h2 className="ah-article-info-paragraph-heading">{title}</h2>
          )}
          {description && <span>{description}</span>}
          {additionalInfo && (
            <span>
              <br />
              <i>{additionalInfo}</i>
            </span>
          )}
        </p>
      </section>
    </ArticleWrapper>
  )
}

export default VideoArticle
