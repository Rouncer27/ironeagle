import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  {
    traneLogo: file(relativePath: { eq: "Trane_Logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TraneLogo = () => {
  const data = useStaticQuery(getData)
  const logo = data.traneLogo.childImageSharp.fluid

  return <Img fluid={logo} alt="Nothing can stop a Trane" />
}
export default TraneLogo
