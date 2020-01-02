import React, { Fragment } from 'react'
import SEO from '../components/seo'
import ArticleWrapper from '../components/Article/ArticleWrapper/ArticleWrapper'

const VideosPage = () => (
  <Fragment>
    <SEO title="Music" />
    <div className="ah-page">
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
      <ArticleWrapper title="LIVE VIDEO">
        <section className="ah-article-visual--video-container">
          <iframe
            title="Bear Town video - live on a Beverly Hills rooftop"
            className="ah-article-visual--video"
            src="https://www.youtube.com/embed/b5qkOo7cQ-s?loop=1&playList=b5qkOo7cQ-s&modestbranding"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">Bear Town</h2>
            <span>Live on a Beverly Hills rooftop</span>
            <span>
              <br />
              <i>From True North EP</i>
            </span>
          </p>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="LIVE VIDEO">
        <section className="ah-article-visual--video-container">
          <iframe
            title="Come Home video - live in Stockholm"
            className="ah-article-visual--video"
            src="https://www.youtube.com/embed/_r5UyN2qqUE?loop=1&playList=_r5UyN2qqUE&modestbranding"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">Come Home</h2>
            <span>Live at Mosebacke in Stockholm</span>
            <span>
              <br />
              <i>From Metro EP</i>
            </span>
          </p>
        </section>
      </ArticleWrapper>
      <ArticleWrapper title="LIVE VIDEO">
        <section className="ah-article-visual--video-container">
          <iframe
            title="Tender Is The Night video - live in Brooklyn"
            className="ah-article-visual--video"
            src="https://www.youtube.com/embed/B2j7JPR9i3s?loop=1&playList=B2j7JPR9i3s&modestbranding"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ah-article-info-wrapper">
          <p className="ah-article-info-paragraph ah-article-info-paragraph--list">
            <h2 className="ah-article-info-paragraph-heading">
              Tender Is The Night
            </h2>
            <span>Live in a Brooklyn clothing store</span>
            <span>
              <br />
              <i>From Mount Foreverest</i>
            </span>
          </p>
        </section>
      </ArticleWrapper>
    </div>
  </Fragment>
)

export default VideosPage
