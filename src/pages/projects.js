import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import projStyles from "./projects.module.scss"
import Head from "../components/head"

const ProjectPage = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            slug
            tech
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
        {projectsData.allContentfulProject.edges.map(edge => {
          return (
            <li className={projStyles.post}>
              <Link to={`/projects/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.tech}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default ProjectPage
