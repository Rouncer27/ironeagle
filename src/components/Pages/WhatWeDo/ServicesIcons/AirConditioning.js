import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import AirConditioningIcon from "../../../Icons/AirConditioningIcon"

const AirConditioning = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <AirConditioningIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Air Conditioning</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          We install, repair, and maintain residential air conditioning systems.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default AirConditioning
