import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'

const NewsPage = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <SEO title="News" />
      <div className="ah-page">
        {/* {data.allMarkdownRemark.edges.map(item => {
          const { title, date, path } = item.node.frontmatter
          return (
            <div key={item.node.id} className="ah-news">
              <h3>{title}</h3>
              <p>
                <small>{date}</small>
              </p>
              <p>{item.node.excerpt}</p>
              <Link to={path}>Read more...</Link>
            </div>
          )
        })} */}
        {data.allMarkdownRemark.edges.map(item => {
          const { title, date, path } = item.node.frontmatter
          return (
            <div key={item.node.id} className="ah-news">
              <h3>{title}</h3>
              <p>
                <small>{date}</small>
              </p>
              <p>{item.node.excerpt}</p>
              <Link to={path}>Read more...</Link>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

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
        }
      }
    }
  }
`

export default NewsPage
