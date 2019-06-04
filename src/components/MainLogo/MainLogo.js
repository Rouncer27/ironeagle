import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const MainLogoStyled = styled.div`
  width: 100%;
  max-width: 35rem;
  margin: 2rem auto;
`

const MainLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          ironEagleLogo: file(
            relativePath: { eq: "iron-eagle-heating-air-conditioning.png" }
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
          <MainLogoStyled>
            <Link to="/">
              <Img
                fluid={data.ironEagleLogo.childImageSharp.fluid}
                alt="Iron Eagle Heating & Air Conditioning."
              />
            </Link>
          </MainLogoStyled>
        )
      }}
    />
  )
}

export default MainLogo
