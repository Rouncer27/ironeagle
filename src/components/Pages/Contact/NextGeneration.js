import React from "react"
import styled from "styled-components"

import { StandardWrapper, SmallContainer } from "../../styles/Commons/Wrappers"
import { RegularH2TitleBlue } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { AngleGreyBackground } from "../../styles/Commons/Effects"
import NextGen from "../../Logos/NextGen"

const NextGenerationStyled = styled.section`
  position: relative;
  margin: 4rem auto;
  padding: 4rem 0;

  .next-gen-wrapper {
    position: relative;
  }

  .next-gen-header {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
  }

  .next-gen-title {
    width: calc(80% - 4rem);
    margin-left: 4rem;

    h2 {
      width: 100%;
      margin: 0;
      line-height: 0.7;
    }
  }

  .next-gen-logo {
    width: calc(20% - 4rem);
    margin-right: 4rem;
  }

  .next-gen-angle {
    transform: rotate(10deg);
  }
`

const NextGeneration = () => {
  return (
    <NextGenerationStyled>
      <StandardWrapper className="next-gen-wrapper">
        <div className="next-gen-header">
          <div className="next-gen-logo">
            <NextGen />
          </div>
          <div className="next-gen-title">
            <RegularH2TitleBlue>Next Generation Careers</RegularH2TitleBlue>
          </div>
        </div>
        <SmallContainer>
          <StandardParagraph>
            The Next Generation is a unique, non-profit organization raising
            awareness for youth career options. The organization connect
            students with employers in the trades and helps students earn job
            experience while learning through their internship.
          </StandardParagraph>
        </SmallContainer>
      </StandardWrapper>
      <AngleGreyBackground className="next-gen-angle" />
    </NextGenerationStyled>
  )
}

export default NextGeneration
