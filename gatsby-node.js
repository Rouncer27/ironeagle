const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWordpressPage {
          edges {
            node {
              slug
              template
              wordpress_id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template === "tpl-page-about.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/About.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-contact.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/Contact.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-promotions.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/Promotions.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-testimonials.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/Testimonials.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-what-we-do.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/WhatWeDo.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-services.php") {
        createPage({
          path: `/what-we-do/${node.slug}`,
          component: path.resolve(`./src/templates/Services.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-trane.php") {
        createPage({
          path: `/what-we-do/${node.slug}`,
          component: path.resolve(`./src/templates/Trane.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      }
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
