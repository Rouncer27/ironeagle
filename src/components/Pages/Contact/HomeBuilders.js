import React from "react"
import styled from "styled-components"

import FormBuilders from "./FormBuilders"
import BackGroundPattern from "../../Svgs/BackGroundPattern"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { SmallH2Title } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"

const HomeBuildersStyled = styled.section`
  position: relative;
  min-height: 40rem;
  ${"" /* overflow: hidden; */}

  @media (min-width: ${props => props.theme.bpTablet}) {
    min-height: 50rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    height: 75vh;
    min-height: 60rem;
  }

  .home-wrapper {
    padding-top: 15rem;
  }


  .home-intro {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-right: 4rem;
    }
  }

  .home-form {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-left: 4rem;
    }
  }

  .background-pattern {
    position: absolute;
    top: -15rem;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: -15rem;
      left: 0;
      width: 100%;
      height: 100%;
    }

    svg {
      width: 250%;
      height: 250%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 150%;
        height: 150%;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 125%;
        height: 125%;
      }

      @media (min-width: ${props => props.theme.bpDeskmd}) {
        width: 110%;
        height: 110%;
      }
    }
  }
`

const HomeBuilders = () => {
  return (
    <HomeBuildersStyled>
      <StandardWrapper className="home-wrapper">
        <div className="home-intro">
          <SmallH2Title>Home Builders</SmallH2Title>
          <div>
            <StandardParagraph>
              We are happy to quote you on any project. Please contact us for
              more information on Home Builder projects.
            </StandardParagraph>
          </div>
        </div>
        <div className="home-form">
          <FormBuilders />
        </div>
      </StandardWrapper>
      <div className="background-pattern">
        <BackGroundPattern />
      </div>
    </HomeBuildersStyled>
  )
}

export default HomeBuilders
