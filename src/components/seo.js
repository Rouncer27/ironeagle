import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

function SEO({ description, lang, meta, title, keywords }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            siteLogo
            metaImg
            siteUrl
          }
        }

        siteLogo: file(
          relativePath: { eq: "iron-eagle-heating-air-conditioning.png" }
        ) {
          publicURL
        }

        defaultFb: file(relativePath: { eq: "default-meta-image.jpg" }) {
          publicURL
        }
      }
    `
  )

  const siteLogoUrl = `${site.siteMetadata.siteUrl}/${siteLogo.publicURL}`

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords !== undefined ? keywords : []
  const image = site.siteMetadata.metaImg
    ? `${site.siteMetadata.siteUrl}/${defaultFb.publicURL}`
    : null

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:locale`,
            content: `en_US`,
          },
          {
            property: `og:url`,
            content: `https://ironeagle.ca/`,
          },
          {
            property: `og:site_name`,
            content: title,
          },
          {
            property: "og:image",
            content: image,
          },
          {
            property: "og:image:alt",
            content:
              "Iron Eagle - Heating & Air Conditioning. We Install, Maintain + Repair Furnaces, HVAC systems, & much more!",
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:image`,
            content: image,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: "google-site-verification",
            content: "gUjh0cZr97E1XN6sRhplJhSL99TYR0A4duY9qL5FmG8",
          },
        ]
          .concat(
            metaKeywords.length > 0
              ? {
                  name: `keywords`,
                  content: metaKeywords.join(`, `),
                }
              : []
          )
          .concat(meta)}
      />
      <SchemaOrg
        isBlogPost={false}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={siteLogoUrl}
        description={description}
        datePublished="June 14, 2019"
        canonicalUrl="https://ironeagle.ca/"
        author="Iron Eagle"
        organization="Iron Eagle"
        defaultTitle="Iron Eagle"
      />
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
