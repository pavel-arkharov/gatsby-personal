import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const IndexPage = () => {

  return (
    <Layout>
    <Head title="Home" />
        <h1>Welcome to my website</h1>
        <h2>I'm a student of Hive Helsinki school of coding and future developer. Here I show my work and write thoughts in the blog.</h2>
        <p><Link to ="/contact">Contact me</Link></p>
    </Layout>
  )
  }

export default IndexPage