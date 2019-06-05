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
    font-weight: bold;
    margin: 0;
    font-size: 1.8rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 2.4rem;
    }

    span {
      color: ${props => props.theme.colorPrim};
    }
  }
`

const IntroYellowCall = ({ content }) => {
  return (
    <IntroYellowCallStyled>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </IntroYellowCallStyled>
  )
}

export default IntroYellowCall
