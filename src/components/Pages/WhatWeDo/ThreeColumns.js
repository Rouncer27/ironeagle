import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { SmallerH2Title } from "../../styles/Commons/Titles"
import { FullScreenWrapper } from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { UnderlineLinks } from "../../styles/Commons/Buttons"

const ThreeColumnsStyled = styled.section`
  padding-top: 5rem;
  .column-item {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.3333% - 2rem);
      margin: 2rem 1rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 6rem);
      margin: 1rem 3rem;
    }

    p {
      margin: 0;
    }
  }

  .column-link {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    a {
      padding: 1rem 3rem 0;
    }
  }
`

const ThreeColumns = () => {
  return (
    <ThreeColumnsStyled>
      <FullScreenWrapper>
        <div className="column-item">
          <div>
            <SmallerH2Title>Home Owners</SmallerH2Title>
          </div>
          <div>
            <StandardParagraph>
              Call us if you are renovating or updating your household heating
              and cooling systems! We will also assess current systems and will
              always provide a free and fair quote.
            </StandardParagraph>
          </div>
        </div>

        <div className="column-item">
          <div>
            <SmallerH2Title>Commercial Projects</SmallerH2Title>
          </div>
          <div>
            <StandardParagraph>
              New commercial projects include hotels, apartment buildings,
              commercial bays, restaurants, and office buildings. We also so
              tenant improvements.
            </StandardParagraph>
          </div>
        </div>

        <div className="column-item">
          <div>
            <SmallerH2Title>Contractors</SmallerH2Title>
          </div>
          <div>
            <StandardParagraph>
              We work on both single and multi-family developments. Call us as
              (403) 948-1333 to discuss your project.
            </StandardParagraph>
          </div>
        </div>

        <UnderlineLinks className="column-link">
          <Link to="/contact">Contact</Link>
        </UnderlineLinks>
      </FullScreenWrapper>
    </ThreeColumnsStyled>
  )
}

export default ThreeColumns
