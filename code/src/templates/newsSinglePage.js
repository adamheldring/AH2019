import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import { ahFormatDate } from '../helpers/ahFormatDate'
import './newsSinglePage.sass'

const NewsSinglePage = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Fragment>
      <SEO title="News" />
      <div className="ah-page">
        <div className="ah-single-article-wrapper">
          {/* <Link to="/news">{`<--`} Go back</Link> */}
          <h1 className="ah-single-article-heading">
            {post.frontmatter.title}
          </h1>
          {ahFormatDate() && (
            <h4 className="ah-single-article-date">
              Posted on {ahFormatDate(post.frontmatter.date)}
            </h4>
          )}
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="ah-single-article-content"
          />
        </div>
      </div>
    </Fragment>
  )
}

export const postQuery = graphql`
  query NewsItemByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default NewsSinglePage
