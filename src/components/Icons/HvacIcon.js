import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const HvacIcon = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          icon: file(
            relativePath: { eq: "icons/Iron-Eagle-Service-HVAC.png" }
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

export default HvacIcon
