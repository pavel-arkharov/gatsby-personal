import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Head from '../components/head'
export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
      }
      html
    }
  }`

const Proj = (props) => {
    return (
        <Layout>
        <Head title={props.data.markdownRemark.frontmatter.title} />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.stack}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
} 

export default Proj