import React from "react"
import {Link, graphql} from "gatsby"

const NewsSinglePage = ({data}) => {
  const post = data.markdownRemark
  console.log("test", data)
  return (
    <div>
      <Link to="/news">
         {`<--`} Go back
      </Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>Posted on {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
    </div>
  )
}

export const postQuery = graphql`
  query NewsItemByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
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