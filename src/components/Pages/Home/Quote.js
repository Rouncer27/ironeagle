import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { RegularH2Title } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { UnderlineLinks } from "../../styles/Commons/Buttons"
import { AngleGreyBackground } from "../../styles/Commons/Effects"
import LocallyOwned from "../../Logos/LocallyOwned"

const QuoteStyled = styled.section`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding-top: 5rem;
    padding-bottom: 15rem;
  }

  .quote-wrapper {
    position: relative;
  }

  .quote-title {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
  }

  .quote-paragraph {
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 60rem;
      margin: 0 auto;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 80rem;
    }
  }

  .quote-link {
    width: 100%;
    text-align: center;

    a {
      padding: 1rem 1rem 0;
      &::after {
        bottom: -0.6rem;
        height: 0.6rem;
      }
    }
  }

  .quote-logo {
    width: 15rem;
    height: 15rem;
    margin: 5rem auto 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      right: 5rem;
      bottom: -5rem;
      width: 15rem;
      height: 15rem;
      margin-top: 0;
      z-index: 5;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      right: 0;
      bottom: -7.5rem;
    }
  }
`

const Quote = () => {
  return (
    <QuoteStyled>
      <StandardWrapper className="quote-wrapper">
        <div className="quote-title">
          <RegularH2Title>Free & Comprehensive Quotes</RegularH2Title>
        </div>
        <div className="quote-paragraph">
          <StandardParagraph>
            We are a referral business, so our success depends on your
            satisfaction. Based on a careful assessment of the situation, we
            offer a free and detailed quote.
          </StandardParagraph>
        </div>
        <UnderlineLinks className="quote-link">
          <Link to="/contact">Free Quote</Link>
        </UnderlineLinks>
        <div className="quote-logo">
          <LocallyOwned />
        </div>
      </StandardWrapper>
      <AngleGreyBackground />
    </QuoteStyled>
  )
}

export default Quote
