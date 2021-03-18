import React from "react"
import { Link } from "gatsby"
import scrollToTop from "../../helpers/scrollToTop"
import ArticleWrapper from "./ArticleWrapper/ArticleWrapper"

const SnippetArticle = () => (
  <ArticleWrapper title="TEASER" singlePageLink="/dance-single-release">
    <section className="ah-article-visual--video-container">
      <iframe
        title="Dance (Teaser)"
        className="ah-article-visual--video"
        src="https://www.youtube.com/embed/3rEP14ghceE?loop=1&playList=3rEP14ghceE&modestbranding"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <h2 className="ah-article-info-paragraph-heading">
          New single DANCE out March 26.
        </h2>
        <Link onClick={scrollToTop} to="/dance-single-release">
          <span className="ah-contact-link">
            <i>Read full article</i>
          </span>
        </Link>
      </div>
    </section>
  </ArticleWrapper>
)

export default SnippetArticle
