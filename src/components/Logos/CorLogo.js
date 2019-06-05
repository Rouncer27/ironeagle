import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const CorLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          corLogo: file(relativePath: { eq: "cor-seal.png" }) {
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
            <a href="https://www.alberta.ca/get-certificate-recognition.aspx">
              <Img
                fluid={data.corLogo.childImageSharp.fluid}
                alt="Iron Eagle Heating & Air Conditioning."
              />
            </a>
          </div>
        )
      }}
    />
  )
}

export default CorLogo
