import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"

import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const IntroStyled = styled.section``

const Intro = () => {
  const title =
    "We Install, Maintain + Repair Furnaces, HVAC systems, & much more!"
  const paraContent =
    "Iron Eagle has continued to provide customers with quality work and fair prices on repairs, new furnaces, air conditioners, HVAC systems, and refrigeration of all types."
  const linkContent = "403.948.1333"
  const linkURL = "tel+14039481333"
  const yellowContent = "Guaranteed <span>24/7 Emergency</span> repair!"
  return (
    <IntroStyled>
      <StandardWrapper>
        <IntroContent
          title={title}
          paraContent={paraContent}
          linkContent={linkContent}
          linkURL={linkURL}
          yellowContent={yellowContent}
        />
        <IntroGraphicVideo video={backgroundVideo} />
      </StandardWrapper>
    </IntroStyled>
  )
}

export default Intro
