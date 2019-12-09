import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const News = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="News" />
      <div>
        <h1>Newsfeed</h1>
        <p>placeholder</p>
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
    </Layout>
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

export default News
