import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import projStyles from "./projects.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            datePublished(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>My blog</h1>
      <ul className={projStyles.posts}>
        {blogData.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={projStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.datePublished}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
