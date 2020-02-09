import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import NewsArticle from '../components/Article/NewsArticle'
import { ahFormatDate } from '../helpers/ahFormatDate'

const NewsPage = ({ data }) => (
  <Fragment>
    <SEO title="NEWS" />
    <div className="ah-page">
      {data.allMarkdownRemark.edges.map(item => {
        const {
          excerpt,
          html,
          frontmatter: { title, date, path, featuredImage, photoCredit },
        } = item.node
        return (
          <NewsArticle
            key={`${date}-${title}`}
            title={title}
            date={ahFormatDate(date, true).toUpperCase()}
            path={path}
            html={html}
            excerpt={excerpt}
            featuredImage={featuredImage}
            photoCredit={photoCredit}
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
            photoCredit
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          html
        }
      }
    }
  }
`

export default NewsPage
