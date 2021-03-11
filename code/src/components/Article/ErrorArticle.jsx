import React from "react"
import ArticleWrapper from "./ArticleWrapper/ArticleWrapper"

const ErrorArticle = ({ title, message, children }) => (
  <ArticleWrapper title={title}>
    <section className="ah-article-info-wrapper">
      <div className="ah-article-info-paragraph ah-article-info-paragraph--list">
        {children}
      </div>
    </section>
  </ArticleWrapper>
)

export default ErrorArticle
