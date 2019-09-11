const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const newsSinglePageTemplate = path.resolve('src/templates/newsSinglePage.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: newsSinglePageTemplate,
      })
    })
  })
}
