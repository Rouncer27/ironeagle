import React from "react"

import { RegularH3Title } from "../../styles/Commons/Titles"
import {
  StandardWrapper,
  SmallContainer,
  TinyContainer,
} from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"

const Peace = () => {
  return (
    <div>
      <StandardWrapper>
        <SmallContainer>
          <RegularH3Title>Your peace of mind is our priority.</RegularH3Title>
        </SmallContainer>
        <TinyContainer>
          <StandardParagraph>
            Our quality work from start to finish adheres to all current
            building codes. We are dedicated to time management, teamwork,
            quality and consistency of all products. Quality Workmanship
            Guaranteed.
          </StandardParagraph>
        </TinyContainer>
      </StandardWrapper>
    </div>
  )
}

export default Peace
