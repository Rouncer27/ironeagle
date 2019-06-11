import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const NextGen = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          logo: file(relativePath: { eq: "Careers-the-next-generation.png" }) {
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
              alt="Careers, the next generation. Iron Eagle Heating & Air Conditioning."
            />
          </div>
        )
      }}
    />
  )
}

export default NextGen
