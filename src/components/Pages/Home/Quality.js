import React from "react"
import styled from "styled-components"

import { FullScreenWrapper, TinyContainer } from "../../styles/Commons/Wrappers"
import { RegularH2Title } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import CorLogo from "../../Logos/CorLogo"

const QualityStyled = styled.section`
  position: relative;
  margin-top: 5rem;
  padding: 4rem 0;
  background: ${props => props.theme.colorPrim};

  .quality-wrapper {
    position: relative;
  }

  .quality-title {
    position: absolute;
    top: -10rem;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -8.5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: -10rem;
    }
  }

  .quality-content {
    position: relative;

    p {
      color: ${props => props.theme.white};
    }

    p:last-of-type {
      margin: 0;
    }
  }

  .quality-logo {
    width: 12.5rem;
    height: 12.5rem;
    margin: 3rem auto 0;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      position: absolute;
      top: 0;
      left: -15rem;
      margin: 0;
    }
  }
`

const Quality = () => {
  return (
    <QualityStyled>
      <FullScreenWrapper className="quality-wrapper">
        <div className="quality-title">
          <RegularH2Title>Quality Workmanship Guaranteed.</RegularH2Title>
        </div>
        <TinyContainer className="quality-content">
          <StandardParagraph>
            Iron Eagle is proud to be COR certified, and we strive to empower
            our staff to actively participate in our safety programs. A
            workplace accident can change their lives forever; safety is the
            most powerful workplace tool they use on a daily basis.
          </StandardParagraph>
          <div className="quality-logo">
            <CorLogo />
          </div>
        </TinyContainer>
      </FullScreenWrapper>
    </QualityStyled>
  )
}

export default Quality
