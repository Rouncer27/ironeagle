import React from "react"
import styled from "styled-components"

import { RegularH2Title } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { StandardWrapper, SmallContainer } from "../../styles/Commons/Wrappers"

const TypesStyled = styled.section`
  position: relative;
  margin-top: 5rem;
  padding: 3rem 0;
  background: ${props => props.theme.colorPrim};

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: 7.5rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin-top: 12rem;
  }

  .type-wrapper {
    position: relative;
  }

  .type-title {
    position: absolute;
    top: -9.75rem;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -11.5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: -13.5rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      top: -14.5rem;
    }
  }

  p {
    color: ${props => props.theme.white};
  }

  p:last-of-type {
    margin: 0;
  }
`

const Types = () => {
  return (
    <TypesStyled>
      <StandardWrapper className="type-wrapper">
        <SmallContainer className="type-title">
          <RegularH2Title>
            Some of the most common
            <br /> types of work we do
          </RegularH2Title>
        </SmallContainer>
        <SmallContainer>
          <StandardParagraph>
            Our quality work from start to finish adheres to all current
            building codes. We are dedicated to time management, team work,
            quality and consistency of all projects. Quality Workmanship
            Guaranteed.
          </StandardParagraph>
        </SmallContainer>
      </StandardWrapper>
    </TypesStyled>
  )
}

export default Types
