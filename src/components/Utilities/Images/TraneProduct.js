import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  {
    traneProduct: file(relativePath: { eq: "Trane-product.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 599) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TraneProduct = () => {
  const data = useStaticQuery(getData)
  const logo = data.traneProduct.childImageSharp.fluid

  return <Img fluid={logo} alt="Nothing can stop a Trane" />
}
export default TraneProduct
