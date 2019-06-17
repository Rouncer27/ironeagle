import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const SmaccLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          traneLogo: file(
            relativePath: { eq: "trane-its-hard-to-stop-a-Trane.png" }
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
              fluid={data.traneLogo.childImageSharp.fluid}
              alt="Trane. Its Hard To Stop A Trane."
            />
          </div>
        )
      }}
    />
  )
}

export default SmaccLogo
