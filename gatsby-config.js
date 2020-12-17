let BASE_URL = ""
let PORTOCOL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "database.ironeagle.ca"
  PORTOCOL = "http"
} else {
  BASE_URL = "database.ironeagle.ca"
  PORTOCOL = "http"
}

module.exports = {
  siteMetadata: {
    title: `Iron Eagle - Heating & Air Conditioning`,
    description: `We Install, Maintian & Repair Furnaces, HVAC systems, & much more!`,
    author: `@gatsbyjs`,
    metaImg: `src/images/default-meta-image.jpg`,
    siteLogo: `src/images/iron-eagle-heating-air-conditioning.png`,
    siteUrl: `https://ironeagle.ca`,
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
        name: `iron-eagle-theme`,
        short_name: `iron-eagle-theme`,
        start_url: `/`,
        background_color: `#ffe05d`,
        theme_color: `#00adef`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-74912934-1",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ironeagle.ca/",
        sitemap: "https://ironeagle.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ironeagle.ca/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        minimizeDeprecationNotice: true,
        baseUrl: `${BASE_URL}`,
        protocol: `${PORTOCOL}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        includedRoutes: [
          "**/media",
          "**/pages",
          "**/wp-api-menus/v2",
          "**/wp-api-menus/v2/menus",
          "**/test",
          "**/job_posting",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "cache-control: public,max-age=60",
            "X-Frame-Options: sameorigin",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Permissions-Policy: geolocation=(), microphone=()",
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Content-Security-Policy: upgrade-insecure-requests",
          ],
          "/**/*.html": ["cache-control: public, max-age=300"],
          "/static/*": ["cache-control: public, max-age=31536000, immutable"],
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
