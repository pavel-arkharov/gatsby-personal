import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const titleData = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }`)
    return (
        <header className={headerStyles.header}>
            <h3><Link className={headerStyles.title} to='/'>{titleData.site.siteMetadata.title}</Link></h3>
            <nav>
                <ul className={headerStyles.navlist}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
					<li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
					<li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header