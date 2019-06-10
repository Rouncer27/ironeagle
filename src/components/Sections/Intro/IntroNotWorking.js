import React from "react"
import styled from "styled-components"

const IntroNotWorkingStyled = styled.div`
  position: absolute;
  right: -110%;
  bottom: -10rem;
  width: 115%;
  margin-top: 5rem;
  padding: 0 3rem;
  box-shadow: -0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorPrim},
    -0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorPrim};

  .not-working-content {
    padding: 1.5rem 3rem;
    padding-left: 4rem;
    max-width: 42.5rem;

    p {
      font-family: ${props => props.theme.fontSec};
      font-weight: bold;
      margin: 0;
      font-size: 1.8rem;
      line-height: 1.4;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.2rem;
      }
    }
  }
`

const IntroNotWorking = () => {
  return (
    <IntroNotWorkingStyled>
      <div className="not-working-content">
        <p>
          Furnace not working?
          <br /> Before you call us try these <br />
          steps to fix it yourself.
        </p>
      </div>
    </IntroNotWorkingStyled>
  )
}

export default IntroNotWorking
