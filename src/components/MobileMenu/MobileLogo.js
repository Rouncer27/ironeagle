import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileLogoStyled = styled.div`
  width: 100%;
  max-width: 32.5rem;
  margin: 2.5rem auto;
  padding: 2rem;
`

const MobileLogo = props => {
  return (
    <MobileLogoStyled className="mobile-logo">
      <Link to="/">
        <Img
          fluid={props.ironEagleLogo.childImageSharp.fluid}
          alt="Iron Eagle Heating & Air Conditioning."
        />
      </Link>
    </MobileLogoStyled>
  )
}

export default MobileLogo
