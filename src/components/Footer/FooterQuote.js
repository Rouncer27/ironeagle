import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { TinyH2Title } from "../styles/Commons/Titles"
import { UnderlineLinks } from "../styles/Commons/Buttons"
import { SmallParagraphs } from "../styles/Commons/Paragraphs"

const StyledFooterQuote = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto 4rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: relative;
    width: calc(33.33% - 1.5rem);
    max-width: 100%;
    margin: 0 0.75rem;
    padding-bottom: 3rem;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(28% - 2rem);
    margin: 0 1rem;
  }

  .quote-link {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      margin: 0 auto;
    }
  }
`

const FooterQuote = () => {
  return (
    <StyledFooterQuote>
      <TinyH2Title itemProp="name">Free &amp; Comprehensive Quote</TinyH2Title>
      <div>
        <SmallParagraphs>
          We offer free and <br />
          detailed quotes based on assessment.
        </SmallParagraphs>
      </div>
      <UnderlineLinks className="quote-link">
        <Link to="/contact/#contact-form">Free Quote</Link>
      </UnderlineLinks>
    </StyledFooterQuote>
  )
}

export default FooterQuote
