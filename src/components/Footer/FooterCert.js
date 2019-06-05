import React from "react"
import styled from "styled-components"

import { TinyH2Title } from "../styles/Commons/Titles"
import CorLogo from "../Logos/CorLogo"
import SmcaaLogo from "../Logos/SmcaaLogo"

const StyledFooterCert = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33.33% - 1.5rem);
    margin: 0 0.75rem;
    max-width: 100%;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(28% - 3rem);
    margin: 0;
    margin-left: 3rem;
  }

  .footer-cert-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (min-width: ${props => props.theme.bpTablet}) {
      margin-bottom: 3rem;
    }

    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 50%;

      a {
        display: block;
        width: 100%;
        margin: 0;
        padding: 1rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          max-width: 15rem;
          padding: 1rem;
        }

        .gatsby-image-wrapper {
          width: 100% !important;
        }
      }
    }

    div:first-of-type {
      width: 40%;
      a {
        @media (min-width: ${props => props.theme.bpDesksm}) {
          max-width: 10rem;
        }
      }
    }

    div:last-of-type {
      width: 60%;
    }
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
      <div className="footer-cert-logos">
        <CorLogo />
        <SmcaaLogo />
      </div>
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
