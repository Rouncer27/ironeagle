import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import FurnacesIcon from "../../../Icons/FurnacesIcon"

const Furnaces = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <FurnacesIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Furnaces</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          We install, repair, and maintain your furnace, including 24/7
          Emergency Services.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default Furnaces
