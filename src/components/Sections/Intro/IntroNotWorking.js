import React from "react"
import styled from "styled-components"

const IntroNotWorkingStyled = styled.div`
  right: -5%;
  bottom: 0rem;
  width: 115%;
  margin-top: 5rem;
  padding: 0 3rem;
  box-shadow: -0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorPrim},
    -0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorPrim},
    0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorPrim},
    0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorPrim};

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: absolute;
    right: -110%;
    bottom: -10rem;
    width: 115%;
    margin-top: 5rem;
    padding: 0 3rem;
    box-shadow: -0.75rem 0.75rem 0 0.75rem ${props => props.theme.colorPrim},
      -0.75rem -0.75rem 0 0.75rem ${props => props.theme.colorPrim};
  }

  .not-working-content {
    position: relative;
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

    &::after {
      display: block;
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      color: ${props => props.theme.colorSec};
      font-family: ${props => props.theme.fontAwesome};
      font-size: 5rem;
      content: "\f078";
    }

    &:hover {
      &::after {
        cursor: pointer;
      }
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      &::after {
        right: -5%;
        font-size: 6rem;
      }
    }
  }
`

const IntroNotWorking = () => {
  return (
    <IntroNotWorkingStyled>
      <div onClick={() => console.log("Hello")} className="not-working-content">
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
