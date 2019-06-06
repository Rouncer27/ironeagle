import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import BackGroundPattern from "../../Svgs/BackGroundPattern"
import { MicroContainer } from "../../styles/Commons/Wrappers"
import { UnderlineLinks } from "../../styles/Commons/Buttons"
import { SmallH2Title } from "../../styles/Commons/Titles"
import { BigBlueDoubleQuote } from "../../styles/Commons/Effects"

const ReferralStyled = styled.section`
  position: relative;
  height: 40rem;
  ${"" /* overflow: hidden; */}

  @media (min-width: ${props => props.theme.bpTablet}) {
    height: 50rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    height: 75vh;
    min-height: 60rem;
  }

  .referral-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

const Referral = () => {
  return (
    <ReferralStyled>
      <div className="referral-content">
        <MicroContainer>
          <BigBlueDoubleQuote>
            <SmallH2Title>
              As a referral business, our success depends on you.
            </SmallH2Title>
          </BigBlueDoubleQuote>
        </MicroContainer>
        <UnderlineLinks>
          <Link to="/testimonials">Read Reviews</Link>
        </UnderlineLinks>
      </div>
      <div className="background-pattern">
        <BackGroundPattern />
      </div>
    </ReferralStyled>
  )
}

export default Referral
