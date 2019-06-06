import React from "react"
import styled from "styled-components"

import { RegularH3Title } from "../../styles/Commons/Titles"
import { StandardWrapper, SmallContainer } from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"

const ServingStyled = styled.section`
  position: relative;
  margin-top: 5rem;
  padding: 3rem 0;
  background: ${props => props.theme.colorPrim};

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: 7.5rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin-top: 10rem;
  }

  .serving-title {
    position: absolute;
    top: -6rem;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -4.75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: -6.25rem;
    }
  }

  p {
    color: ${props => props.theme.white};
  }

  p:last-of-type {
    margin: 0;
  }
`

const Serving = () => {
  return (
    <ServingStyled>
      <StandardWrapper>
        <div className="serving-title">
          <RegularH3Title>Serving Southern Alberta Since 1993</RegularH3Title>
        </div>
        <SmallContainer>
          <StandardParagraph>
            Iron Eagle employs over 30 people, both journeymen and apprentices.
            Based in Airdrie, we also work in the surrounding communities of
            Calgary and High River.
          </StandardParagraph>
          <StandardParagraph>
            We are a proud sponsor of the Airdrie Food Bank, a member of the
            Sheet Metal Contractors Association, and we are in collaboration
            with Careers – The Next Generation. This program provides a learning
            opportunity and work experience to students who are interested in
            the trades.
          </StandardParagraph>
        </SmallContainer>
      </StandardWrapper>
    </ServingStyled>
  )
}

export default Serving
