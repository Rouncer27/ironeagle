import React from "react"
import styled from "styled-components"

import { RegularH2TitleBlue } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const WorkStyled = styled.section`
  position: relative;
  margin-bottom: 5rem;
  z-index: 5;

  .work-title,
  .work-content {
    width: 100%;
    text-align: center;
  }

  .work-slider {
    min-height: 45rem;
  }

  .work-background {
    top: auto;
    bottom: 5rem;
    max-height: 40rem;
    background: #00adef;
  }
`

const Work = () => {
  return (
    <WorkStyled>
      <StandardWrapper>
        <div className="work-title">
          <RegularH2TitleBlue>Work We’ve Done</RegularH2TitleBlue>
        </div>
        <div className="work-content">
          <StandardParagraph>
            Here are some of the projects we have worked on.{" "}
          </StandardParagraph>
        </div>
        <div className="work-slider">Slider......</div>
      </StandardWrapper>
      <AngleGreyBackground className="work-background" />
    </WorkStyled>
  )
}

export default Work
