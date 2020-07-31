import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className = {headerStyles.header}>
            <h1>
    <Link className = {headerStyles.title} to = '/'>Hiiiiiiiii👋 </Link>
            </h1> 
            <nav>
                <ul className = {headerStyles.navList}> 
                    <li><Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to = '/'>Why is this site? 💘 </Link></li>
                    <li><Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to = '/blog'>How i feel about you 💌 </Link></li>
                    
                </ul>   
            </nav>  
        </header>
    )
}

export default Header