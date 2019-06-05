let BASE_URL = ""
let PORTOCOL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "localhost/ironeagle"
  PORTOCOL = "http"
} else {
  BASE_URL = "dedi105.canspace.ca/~ironeagleswbcrea/database"
  PORTOCOL = "http"
}

module.exports = {
  siteMetadata: {
    title: `Iron Eagle - Heating & Air Conditioning`,
    description: `We Install, Maintian & Repair Furnaces, HVAC systems, & much more!`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `${BASE_URL}`,
        protocol: `${PORTOCOL}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
