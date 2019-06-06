import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import RenovationsIcon from "../../../Icons/RenovationsIcon"

const Renovations = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <RenovationsIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Renovations</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          Renovating your home? We can assess your heating and cooling systems
          to ensure they are up to date.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default Renovations
