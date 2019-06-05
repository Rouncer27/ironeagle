import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import backgroundImage from "../../../images/Iron-eagle-gages.png"
import { MicroContainer } from "../../styles/Commons/Wrappers"
import { UnderlineLinks } from "../../styles/Commons/Buttons"
import { SmallH2Title } from "../../styles/Commons/Titles"

const ReferralStyled = styled.section`
  position: relative;
  height: 65rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    height: 55rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    height: 75vh;
    min-height: 70rem;
  }

  .referral-content {
    position: absolute;
    top: 22.5%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, 0%);

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .referral-title {
    position: relative;
    width: 100%;
    margin: 0 auto;

    &::after {
      position: absolute;
      top: -7.5rem;
      right: 0;
      left: 0;
      width: 5.5rem;
      height: 5.5rem;
      margin: 0 auto;
      color: ${props => props.theme.colorPrim};
      font-family: ${props => props.theme.fontSec};
      font-size: 17.5rem;
      line-height: 1;
      content: "“";
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      &::after {
        top: -10rem;
        width: 6.5rem;
        height: 6.5rem;
        font-size: 20rem;
      }
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      &::after {
        top: -10rem;
        width: 7.5rem;
        height: 7.5rem;
        font-size: 25rem;
      }
    }
  }

  .referral-link {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .referral-login {
    display: none;

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: block;
      position: absolute;
      top: 3rem;
      right: 0;
      width: calc(30% + 50rem);
      padding: 2rem 3rem 3rem;
      transform: translate(50rem, 0);
      text-align: left;
      box-shadow: -0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorSec},
        -0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorSec};
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      padding: 3rem 4.5rem 4.5rem;
      padding-left: 6rem;
    }

    p {
      font-weight: bold;
      margin: 0;
      font-size: 1.8rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.4rem;
      }
    }

    &--link {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        padding-left: 3.5rem;
      }

      a {
        padding: 1rem 4rem 0;
      }
    }
  }

  .referral-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30rem;
    height: 28.38rem;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 30rem;
      height: 28.38rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 35rem;
      height: 33.11rem;
    }
  }
`

const Referral = () => {
  return (
    <ReferralStyled>
      <div className="referral-content">
        <MicroContainer className="referral-title">
          <SmallH2Title>
            We are a referral business, so our success depends on your
            satisfaction.
          </SmallH2Title>
        </MicroContainer>
        <UnderlineLinks className="referral-link">
          <Link to="/testimonials">Read Reviews</Link>
        </UnderlineLinks>
      </div>
      <div className="referral-login">
        <p>Employee Access</p>
        <UnderlineLinks className="referral-login--link">
          <a href="http://ironeagle.ca/wp-admin">Log In</a>
        </UnderlineLinks>
      </div>

      <div className="referral-background" />
    </ReferralStyled>
  )
}

export default Referral
