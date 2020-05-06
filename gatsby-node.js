const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const helpTemplate = path.resolve(`src/templates/helpTemplate.tsx`)
  const resourcesTemplate = path.resolve(`src/templates/resourcesTemplate.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path,
              language
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: node.frontmatter.path.includes('/help/') ? helpTemplate : resourcesTemplate,
      context: {
        slug: node.frontmatter.path,
        langKey: node.frontmatter.language
      },
    })
  })
}
