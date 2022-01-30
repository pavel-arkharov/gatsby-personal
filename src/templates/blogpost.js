import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      datePublished(formatString: "DD MMMM YYYY")
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>Published: {props.data.contentfulBlogPost.datePublished}</p>
      <div>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
