const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      let slug = createFilePath({ node, getNode, basePath: node.sourceInstanceName })
        if(node.frontmatter.show){
            slug = node.frontmatter.show.split(' ').join('').split("'").join('')+slug
        }
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = path.resolve(`src/templates/show.tsx`)

  const result = await graphql(
    `
      {
        allFile(filter: {sourceInstanceName: {eq: "shows"}}) {
            edges {
              node {
                id
                sourceInstanceName
                childMarkdownRemark {
                    fields{
                        slug
                    }
                  frontmatter {
                    description
                    title
                    logo {
                        childImageSharp {
                          fluid {
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            originalImg
                            originalName
                          }
                        }
                    }
                  }
                }
              }
            }
          }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

    // Create blog posts pages.
    const posts = result.data.allFile.edges

    // Create blog post pages.
    posts.forEach(post => {
        const { title, description, logo } = post.node.childMarkdownRemark.frontmatter;
            console.log(post.node)
      createPage({
        // Path for this page — required
        path: post.node.childMarkdownRemark.fields.slug,
        component: content,
        context: {
            title,
            description,
            logo
        },
      })
    })
}