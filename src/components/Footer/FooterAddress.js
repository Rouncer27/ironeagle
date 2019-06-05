import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { TinyH2Title } from "../styles/Commons/Titles"
import { UnderlineLinks } from "../styles/Commons/Buttons"

const StyledFooterAddress = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto 4rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: relative;
    width: calc(33.33% - 1.5rem);
    margin: 0 0.75rem;
    padding-bottom: 3rem;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(28% - 2rem);
    margin: 0 1rem;
  }

  address {
    margin-bottom: 1.6rem;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontPrim};
    font-style: normal;
    font-weight: 300;
    line-height: 1.56;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.4rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 1.6rem;
    }

    .street-address {
      display: block;

      &__wrapper,
      &__phone {
        display: block;
      }

      &__phone {
        a {
          color: ${props => props.theme.black};
          font-weight: bold;

          &:hover {
            color: ${props => props.theme.colorSec};
          }
        }
      }
    }
  }

  .career-link {
    margin-top: 1rem;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      margin: 0 auto;
    }
  }
`

const FooterAddress = () => {
  return (
    <StyledFooterAddress itemScope itemType="http://schema.org/LocalBusiness">
      <TinyH2Title itemProp="name">Iron Eagle Heating</TinyH2Title>
      <address
        className="vcard"
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <span className="adr">
          <span itemProp="streetAddress" className="street-address">
            708 East Lake Rise NE
          </span>
          <span className="street-address__wrapper">
            <span itemProp="addressLocality" className="locality">
              Airdrie
            </span>
            ,{" "}
            <span className="region" title="Alberta">
              Alberta
            </span>
            ,{" "}
            <span itemProp="postalCode" className="postal-code">
              T4A 2H9
            </span>
          </span>
          <span className="street-address__phone">
            Phone 24/7:{" "}
            <a href="tel:+14039481333" itemProp="telephone">
              403.948.1333
            </a>
          </span>
        </span>
      </address>
      <UnderlineLinks className="career-link">
        <Link to="/contact">Careers</Link>
      </UnderlineLinks>
    </StyledFooterAddress>
  )
}

export default FooterAddress
