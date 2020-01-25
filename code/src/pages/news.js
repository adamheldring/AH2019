import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import NewsArticle from '../components/Article/NewsArticle'

const NewsPage = ({ data }) => (
  <Fragment>
    <SEO title="News" />
    <div className="ah-page">
      {data.allMarkdownRemark.edges.map(item => {
        const {
          excerpt,
          html,
          frontmatter: { title, date, path },
        } = item.node
        return (
          <NewsArticle
            title={title}
            date={date}
            path={path}
            html={html}
            excerpt={excerpt}
          />
        )
      })}
    </div>
  </Fragment>
)

export const pageQuery = graphql`
  query NewsIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
          excerpt
          html
        }
      }
    }
  }
`

export default NewsPage
