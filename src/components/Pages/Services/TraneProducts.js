import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { SmallH2Title } from "../../styles/Commons/Titles"
import { UnderlineLinks } from "../../styles/Commons/Buttons"
import { StandardWrapper } from "../../styles/Commons/Wrappers"

import TraneLogo from "../../Logos/TraneLogo"

const TraneProductsStyled = styled.section`
  padding: 5rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 7.5rem 0;
  }

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 2.5rem 0 10rem;
  }

  .trane-title {
    width: 100%;
    text-align: center;
  }

  .trane-logo {
    width: 100%;

    .gatsby-image-wrapper {
      max-width: 25rem;
      margin: 4rem auto;
    }
  }

  .trane-link {
    width: 100%;
    text-align: center;
  }
`

const TraneProducts = () => {
  return (
    <TraneProductsStyled>
      <StandardWrapper>
        <div className="trane-title">
          <SmallH2Title>See The Lineup Of Trane Products</SmallH2Title>
        </div>
        <div className="trane-logo">
          <TraneLogo />
        </div>
        <UnderlineLinks className="trane-link">
          <Link to="/what-we-do/trane-products">Trane Products</Link>
        </UnderlineLinks>
      </StandardWrapper>
    </TraneProductsStyled>
  )
}

export default TraneProducts
