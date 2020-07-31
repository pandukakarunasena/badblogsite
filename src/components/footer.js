import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p>Created by me 👦   </p>
        </footer>
    )
}

export default Footer