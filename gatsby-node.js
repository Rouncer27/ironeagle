const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                slug
                template
                wordpress_id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === "home") {
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/index.js`),
          })
        } else if (edge.node.template === "tpl-page-about.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/About.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-contact.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Contact.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-promotions.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Promotions.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-testimonials.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Testimonials.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-what-we-do.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/WhatWeDo.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-services.php") {
          createPage({
            path: `/what-we-do/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Services.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-trane.php") {
          createPage({
            path: `/what-we-do/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Trane.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        }
      })
    })
    resolve()
  })
}
