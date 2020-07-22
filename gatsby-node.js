const path = require('path')

//whats this ???????????????????
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark'){

        const slug = path.basename(node.fileAbsolutePath, '.md')// take out the slug from markdown file path

        //add it to the markdown api
        createNodeField({
            node,
            name: 'slug',
            value:slug
        })
    }
}

//to dynamically create new pages from a markdown file
module.exports.createPages = async ({graphql, actions}) => {
    const { createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js') //directing to the new page template
    //grabing graphql data (there are two nodes in this one for React and one for gatsby)
    const res = await graphql(` 
        query {
            allMarkdownRemark {
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    //iterate through two nodes and dynamically create the pages with a dynamic url
    res.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            component: blogTemplate, // the page template to be created
            path: `/blog/${node.fields.slug}`, // path to be created
            context: {
                slug: node.fields.slug //pass this information to the newly created page so 
                //it can grab the data from graphql by checking it(as a variable)
            }
        })
    })
}

//to dynamically create new pages from a CMS(contentful)
module.exports.createPages = async ({graphql, actions}) => {
    const { createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js') //directing to the new page template
    //grabing graphql data (there are two nodes in this one for React and one for gatsby)
    const res = await graphql(` 
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    //iterate through two nodes and dynamically create the pages with a dynamic url
    res.data.allContentfulBlogPost.edges.forEach((node) => {
        createPage({
            component: blogTemplate, // the page template to be created
            path: `/blog/${node.node.slug}`, // path to be created
            context: { 
                slug: node.node.slug //pass this information to the newly created page so 
                //it can grab the data from graphql by checking it(as a variable)
            }
        })
    })
}