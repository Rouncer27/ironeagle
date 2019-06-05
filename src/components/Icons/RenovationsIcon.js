import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const RenovationsIcon = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          icon: file(
            relativePath: { eq: "icons/Iron-Eagle-Service-Renovations.png" }
          ) {
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
            <Img
              fluid={data.icon.childImageSharp.fluid}
              alt="Iron Eagle Service - Commercial Projects."
            />
          </div>
        )
      }}
    />
  )
}

export default RenovationsIcon
