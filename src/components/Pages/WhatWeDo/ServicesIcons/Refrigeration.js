import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import RefrigerationIcon from "../../../Icons/RefrigerationIcon"

const Refrigeration = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <RefrigerationIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Refrigeration</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          We install, repair, and maintain your household cooling systems
          including refrigerators, reach-in coolers, and freezers. We also
          install and maintain commercial walk-in refrigerators.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default Refrigeration
