import React, { Fragment, useContext } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import { ahFormatDate } from '../helpers/ahFormatDate'
import { ahContext } from '../helpers/ahContext'
import scrollToAnchorPoint from '../helpers/scrollToAnchorPoint'
import './newsSinglePage.sass'

const NewsSinglePage = ({ data }) => {
  const { scrollUpAnchorRef, menuInDarkmode } = useContext(ahContext)
  const post = data.markdownRemark
  return (
    <Fragment>
      <SEO title="News" />
      <div className="ah-page">
        <div className="ah-single-article-wrapper">
          {/* <Link to="/news">{`<--`} Go back</Link> */}
          {ahFormatDate(post.frontmatter.date) && (
            <div className="ah-single-article-date">
              {ahFormatDate(post.frontmatter.date, true).toUpperCase()}
            </div>
          )}
          <h1 className="ah-single-article-heading">
            {post.frontmatter.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="ah-single-article-content"
          />
          <div className="ah-single-article-back-button-wrapper">
            <li
              className="ah-menu-list-item-wrapper"
              style={{ listStyle: 'none', margin: '10px 0 0' }}
            >
              <Link
                onClick={() =>
                  scrollToAnchorPoint(scrollUpAnchorRef, menuInDarkmode)
                }
                to="/news"
                className="ah-menu-list-item ah-single-article-back-button"
              >
                BACK TO NEWS
              </Link>
            </li>
          </div>
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
