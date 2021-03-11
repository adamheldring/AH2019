import React from "react"
import { Link } from "gatsby"
import scrollToTop from "../../helpers/scrollToTop"
import ArticleWrapper from "./ArticleWrapper/ArticleWrapper"

const SnippetArticle = () => (
  <ArticleWrapper
    title="LATEST NEWS – MAR-12-2021"
    singlePageLink="/dance-single-release"
  >
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        <h2 className="ah-article-info-paragraph-heading">
          New single "DANCE" out March 26.
        </h2>
        <span>
          <Link onClick={scrollToTop} to="/dance-single-release">
            <i>Read full article</i>
          </Link>
        </span>
      </div>
    </section>
  </ArticleWrapper>
)

export default SnippetArticle
