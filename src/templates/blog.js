import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import blogStyles from './blog.module.scss'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
//here we cant use useStaticQuery as before cuz theres no slug field created
//in the beggining so this is the only method to grab the data from 
//graphql which is not created in the beggining
//export this so gatsby can access it and grab the data from graphql
export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    author
    publishedDate(formatString:"MMMM Do, YYYY")
    slug 
    body {
        json
    }
  } 
}`

console.log(query)

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt = {alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <div className = {blogStyles.blogPost}>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                <div>
                    <h4>{props.data.contentfulBlogPost.author}</h4>
                    <h4>{props.data.contentfulBlogPost.publishedDate}</h4>
                </div>
            </div>
        </Layout>
    )
}

export default Blog