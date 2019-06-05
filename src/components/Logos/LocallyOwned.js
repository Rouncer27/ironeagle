import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const LocallyOwned = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          logo: file(relativePath: { eq: "Iron-Eagel-Locally-Owned.png" }) {
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
              fluid={data.logo.childImageSharp.fluid}
              alt="Iron Eagle Heating & Air Conditioning."
            />
          </div>
        )
      }}
    />
  )
}

export default LocallyOwned
