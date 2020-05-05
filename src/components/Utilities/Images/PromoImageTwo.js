import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  {
    promoImage: file(relativePath: { eq: "2020TraneSummerProm.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PromoImageTwo = () => {
  const data = useStaticQuery(getData)
  const logo = data.promoImage.childImageSharp.fluid

  return <Img fluid={logo} alt="Nothing can stop a Trane" />
}
export default PromoImageTwo
