import React from "react"
import styled from "styled-components"

import { TinyH2Title } from "../styles/Commons/Titles"

const StyledFooterCert = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 50%;
    max-width: 100%;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(28% - 3rem);
    margin-left: 3rem;
  }

  .footer-copy {
    p {
      color: #949599;
      font-family: ${props => props.theme.fontPrim};
      font-size: 1.2rem;

      a {
        color: #949599;
        font-size: 1em;

        &:hover {
          color: ${props => props.theme.colorSec};
        }
      }
    }
  }
`

const FooterCert = () => {
  return (
    <StyledFooterCert>
      <TinyH2Title>We are proudly certified.</TinyH2Title>
      <div className="footer-copy">
        <p>
          Copyright © {new Date().getFullYear()} Iron Eagle. Made in Airdrie.
          Designed and developed by{" "}
          <a href="https://switchbackcreative.ca/">Switchback Creative Inc.</a>{" "}
          Built with ♡ and
          <a href="https://www.gatsbyjs.org"> Gatsby.</a>
        </p>
      </div>
    </StyledFooterCert>
  )
}

export default FooterCert
