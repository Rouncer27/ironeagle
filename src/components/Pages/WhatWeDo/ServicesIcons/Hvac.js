import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import HvacIcon from "../../../Icons/HvacIcon"

const Hvac = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <HvacIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>
          Heating, Ventilation, And Air Conditioning Systems (HVAC)
        </SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          We install, repair, and maintain your home HVAC system.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default Hvac
