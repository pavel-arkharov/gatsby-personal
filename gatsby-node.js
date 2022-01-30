const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projTemplate = path.resolve("./src/templates/proj.js")
  const blogPostTemplate = path.resolve("./src/templates/blogpost.js")
  const response = await graphql(`
	query {
		allContentfulProject {
		edges {
			node {
			slug
			}
		}
		}
		allContentfulBlogPost {
		edges {
		node {
			slug
		}
		}
	}
	}
  `)

  response.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: projTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  response.data.allContentfulBlogPost.edges.forEach(edge => {
	createPage({
	  component: blogPostTemplate,
	  path: `/blog/${edge.node.slug}`,
	  context: {
		slug: edge.node.slug,
	  },
	})
  })
}
