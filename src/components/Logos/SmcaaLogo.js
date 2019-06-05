import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const SmaccLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          smcaaLogo: file(relativePath: { eq: "SMCAA.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
            <a href="https://www.smcaa.ca/">
              <Img
                fluid={data.smcaaLogo.childImageSharp.fluid}
                alt="Iron Eagle Heating & Air Conditioning."
              />
            </a>
          </div>
        )
      }}
    />
  )
}

export default SmaccLogo
