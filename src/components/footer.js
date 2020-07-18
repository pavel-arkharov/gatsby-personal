import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const footerData = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author,
            description
          }
        }
      }
    `)
    return (
        <footer className={footerStyles.footer}>
        
            <p>Created by {footerData.site.siteMetadata.author}, 2020</p>
            
            <p className={footerStyles.description}>{footerData.site.siteMetadata.description}</p>
        
        </footer>
    )
}

export default Footer