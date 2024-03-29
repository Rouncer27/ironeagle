import React from "react"
import styled from "styled-components"

const IntroYellowCallStyled = styled.div`
  width: calc(100% + 50rem);
  transform: translate(-50rem, 0);
  margin-top: 5rem;
  padding: 3rem;
  transform: translate(-50rem, 0);
  text-align: right;
  box-shadow: 0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorSec},
    0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorSec};

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 3rem;
    padding-right: 6rem;
  }

  p {
    font-family: ${props => props.theme.fontSec};
    font-weight: bold;
    margin: 0;
    padding-left: 45rem;
    font-size: 1.8rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding-left: 0;
      font-size: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 2.4rem;
    }

    span {
      color: ${props => props.theme.colorPrim};
    }

    a {
      color: #000;
      font-weight: bold;

      &:hover {
        color: ${props => props.theme.colorSec};
      }
    }
  }

  p.emergency-number {
    font-weight: bold;
    margin: 0;
    font-size: 1.8rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 4.6rem;
    }
  }
`

const IntroYellowCall = ({ content, location }) => {
  let emergencyNumber = false
  if (location !== undefined) {
    if (location.pathname === "/contact" || location.pathname === "/contact/") {
      emergencyNumber = true
    }
  }
  return (
    <IntroYellowCallStyled>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      {emergencyNumber && <p className="emergency-number">403.948.1333</p>}
    </IntroYellowCallStyled>
  )
}

export default IntroYellowCall
