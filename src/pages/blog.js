import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from '../pages/blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

    /*
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        author
                        fate
                    }

                    html
                    fields {
                        slug
                    }
                }
            }
        }
    `)
     */
    
     //grab data from the Contenrful CMS
    const CMSdata = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: 
          {
            fields: publishedDate
            order: DESC
          }) {
          edges {
            node {
              title
              author
              publishedDate(formatString:"MMMM Do, YYYY")
              slug
            }
          }
        }
      }
    `)

    console.log(CMSdata)

    return(
        <Layout>
            <Head title = 'blogs' />
            {
                CMSdata.allContentfulBlogPost.edges.map(obj => (
                    <div className = {blogStyles.blogPosts}>
                        <h2>{obj.node.title}</h2>
                        <div className = {blogStyles.blogDetails}>
                            <h4>{obj.node.author}</h4>
                            <h4>{obj.node.publishedDate}</h4>
                            <h4><Link className = {blogStyles.blogLink} to = {`/blog/${obj.node.slug}`}>Read the post 💘 </Link></h4>         
                        </div>
                    </div>
                ))
            }
            
            
        </Layout>
    )
}

export default BlogPage