import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      tech
      body {
        json
      }
    }
  }
`

const Proj = props => {
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
      <Head title={props.data.contentfulProject.title} />
      <h1>{props.data.contentfulProject.title}</h1>
      <p>{props.data.contentfulProject.tech}</p>
      <div>
        {documentToReactComponents(
          props.data.contentfulProject.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Proj
