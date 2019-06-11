import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { SmallH2Title } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"

import Form from "./Form"

const CheckStyled = styled.section`
  padding-top: 2.5rem;
  position: relative;
  background: ${props => props.theme.colorPrim};

  .check-title {
    position: absolute;
    top: -5rem;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -4.75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: -9.5rem;
    }
  }

  .check-intro {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    text-align: center;

    p {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontPrim};
      line-height: 1.67;

      span {
        color: ${props => props.theme.colorSec};
        font-weight: 600;
      }
    }
  }
  .check-items {
    width: 100%;
    ol {
      @media (min-width: ${props => props.theme.bpTablet}) {
        columns: 2;
      }

      li {
        padding-left: 2rem;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontPrim};
        counter-increment: count-me;
        line-height: 1.67;

        &::before {
          content: counter(count-me) ". ";
          display: block;
          position: relative;
          max-width: 0px;
          max-height: 0px;
          left: -35px;
          top: 0.05em;
          color: ${props => props.theme.colorSec};
          font-weight: bold;
        }
      }
    }
  }
`

const Check = () => {
  return (
    <CheckStyled>
      <StandardWrapper>
        <div className="check-title">
          <SmallH2Title>
            Check your furnace before you call.
            <br /> Save time and money.
          </SmallH2Title>
        </div>
        <div className="check-intro">
          <StandardParagraph>
            This list will help save you time and money. If these solutions
            don’t work, our service technicians are happy to help. Fill out the
            contact form here or give us a call at <span>(403) 948-1333</span>{" "}
            to get in touch with us.
          </StandardParagraph>
        </div>
        <div className="check-items">
          <ol>
            <li>
              Is the power on? Check the breaker and the furnace disconnect
              switch.
            </li>
            <li>Check fuses and safety switches.</li>
            <li>Is the bottom door on and secure?</li>
            <li>Is the gas valve or gas supply on?</li>
            <li>Is the thermostat set correctly?</li>
            <li>Is return air blocked by furniture?</li>
            <li>Is the furnace filter clean?</li>
            <li>Is the condensate drain clear of debris?</li>
            <li>Are the exterior vents frosted/iced up?</li>
            <li>Turn the power off for 5 minutes then reset.</li>
            <li>Check/replace batteries in thermostat</li>
          </ol>
        </div>
        <Form />
      </StandardWrapper>
    </CheckStyled>
  )
}

export default Check
