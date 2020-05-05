import React from "react"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const PromoImageStyled = styled(BgImg)`
  width: 100%;
  height: 100%;
  position: static !important;
  background-position: bottom center;
  background-repeat: repeat;
  background-size: cover;
  z-index: -1;
`

const getData = graphql`
  {
    tranePromo: file(relativePath: { eq: "2020TraneSummerProm.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const PromoImage = props => {
  const data = useStaticQuery(getData)
  const imageData = data.tranePromo.childImageSharp.fluid
  return <PromoImageStyled Tag="div" fluid={imageData} />
}

export default PromoImage
