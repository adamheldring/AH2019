import React from 'react'
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'

const VideoArticle = () => (
  <ArticleWrapper title="MUSIC VIDEO">
    <section className="ah-article-visual--video-container">
      <iframe
        title="You/More video"
        className="ah-article-visual--video"
        src="https://www.youtube.com/embed/hP7B0h3oIdk?loop=1&playList=hP7B0h3oIdk&modestbranding"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
    <section className="ah-article-info-wrapper">
      <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <h2 className="ah-article-info-paragraph-heading">You / More</h2>
        <span>From upcoming full album</span>
        <span>
          <br />
          <i>From You / More single</i>
        </span>
      </p>
    </section>
  </ArticleWrapper>
)

export default VideoArticle
