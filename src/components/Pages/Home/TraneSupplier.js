import React from "react"
import styled from "styled-components"

import { RegularH2Title } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { UnderlineLinks } from "../../styles/Commons/Buttons"

import TraneLogo from "../../Utilities/Images/TraneLogo"
import TraneProduct from "../../Utilities/Images/TraneProduct"

const TraneSupplierStyled = styled.section`
  position: relative;
  padding: 7.5rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 10rem 0;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 12.5rem 0 0;
  }

  .trane-title,
  .trane-link {
    width: 100%;
    text-align: center;
  }

  .trane-background {
    top: 12.5rem;
    height: 95%;
    max-height: 40rem;
    transform: rotate(10deg);
  }

  .trane-logo {
    width: 100%;
    max-width: 30rem;
    margin-bottom: 3rem;
  }

  .trane-product {
    width: 100%;
    max-width: 30rem;
    margin-top: 5rem;
  }
`

const TraneSupplier = () => {
  return (
    <TraneSupplierStyled>
      <StandardWrapper>
        <div className="trane-logo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.trane.com/Index.aspx"
          >
            <TraneLogo />
          </a>
        </div>
        <div className="trane-title">
          <RegularH2Title>Iron Eagle is a Trane Supplier</RegularH2Title>
        </div>
        <UnderlineLinks className="trane-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.trane.com/Index.aspx"
          >
            Trane Website
          </a>
        </UnderlineLinks>
        <div className="trane-product">
          <TraneProduct />
        </div>
      </StandardWrapper>
    </TraneSupplierStyled>
  )
}

export default TraneSupplier
