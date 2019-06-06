import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import NewHomeIcon from "../../../Icons/NewHomeIcon"

const NewHomeBuilds = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <NewHomeIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>New Home Builds</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          In new homes, we install heating and cooling systems to ensure
          efficiency and reliability.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default NewHomeBuilds
