/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// create slugs from file names
 const { createFilePath } = require(`gatsby-source-filesystem`)



// This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
 exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
     // The function handles finding the parent File node along with creating the slug.
     // Now you can add your new slugs directly onto the MarkdownRemark nodes. This is powerful, as any data you add to nodes is available to query later with GraphQL. So, it’ll be easy to get the slug when it comes time to create the pages.
     // To do so, you’ll use a function passed to your API implementation called createNodeField. This function allows you to create additional fields on nodes created by other plugins. Only the original creator of a node can directly modify the node—all other plugins (including your gatsby-node.js) must use this function to create additional fields.

     const slug = createFilePath({ node, getNode, basePath: `markdown` })
     createNodeField({
       node,
       name: `slug`,
       value: slug,
     })

     // Now that the slugs are created, you can create the pages. with createPages

     // you can now query the slug in the field property i.e.
      // {
      //   allMarkdownRemark {
      //     edges {
      //       node {
      //         fields {
      //           slug
      //         }
      //       }
      //     }
      //   }
      // }
   }
 }

 exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio${node.fields.slug}`, // Put the newly created files in /portfolio // think the slug has /**/ which is why no slash
      component: path.resolve(`./src/templates/portfolioItemPage.js`), // template for the file
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })

  console.log(JSON.stringify(result, null, 4))
}
