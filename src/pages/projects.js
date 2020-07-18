import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import projStyles from './projects.module.scss'
import Head from '../components/head'


const ProjectPage = () => {

    const projectsData = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                stack
              }
              fields {
                  slug
              }
            }
          }
        }
      }
    `)
    return (
        <Layout>
        <Head title="Projects" />
            <h1>My projects</h1>
            <ul className={projStyles.posts}>
                {projectsData.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={projStyles.post}>
                            <Link to={`/projects/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>Tech stack: {edge.node.frontmatter.stack}</p>
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>
        </Layout>
    )
}

export default ProjectPage