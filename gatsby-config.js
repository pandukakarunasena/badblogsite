/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {  //this is used yto have some dynamic content using graphql
    title: 'Hello fuckers!',
    author: 'Bad boy'
  },

  plugins: [

    `gatsby-plugin-react-helmet`,

    {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      
        } 
    },

    `gatsby-plugin-sass`, //this is used to enablee sass

    {
      //pul the content from a resource 
      //this plugin is used to access the files in the local environment
      resolve: `gatsby-source-filesystem`, //when you give  a object as plugin should give the name of the plugin under resolve
      options: {
        name: `src`,
        path: `${__dirname}/src/`, 
      }
    },

    `gatsby-plugin-sharp`,//plugin for grab tools 

    //if some plugin is specific to a big plugin put it under
    //same plugin
    { //this is used to parse the markdown files to HTML
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-relative-images`, //set path to a markdown file

          {
            resolve: `gatsby-remark-images`, //read images from a markdown file
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ],
      }
    }
  ],
}
