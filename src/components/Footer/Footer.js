import React from "react"
import styled from "styled-components"

import MainLogo from "../MainLogo/MainLogo"
import { StandardWrapper } from "../styles/Commons/Wrappers"
import FooterAddress from "./FooterAddress"
import FooterQuote from "./FooterQuote"
import FooterCert from "./FooterCert"

const FooterStyled = styled.footer`
  .footer-wrapper {
    @media (min-width: ${props => props.theme.bpDeskmd}) {
      max-width: 120rem;
    }
  }

  .footer-logo {
    width: 100%;
    max-width: 20rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      max-width: 20rem;
      margin-right: 25%;
      margin-bottom: 2.5rem;
      margin-left: 25%;
      text-align: left;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(16% - 4rem);
      max-width: 20rem;
      margin-right: 4rem;
      margin-bottom: 0;
      margin-left: 0;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      max-width: 17.5rem;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <StandardWrapper className="footer-wrapper">
        <div className="footer-logo">
          <MainLogo />
        </div>
        <FooterAddress />
        <FooterQuote />
        <FooterCert />
      </StandardWrapper>
    </FooterStyled>
  )
}

export default Footer
