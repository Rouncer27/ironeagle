import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import { SmallParagraphs } from "../../../styles/Commons/Paragraphs"
import CommercialProjectsIcon from "../../../Icons/CommercialProjectsIcon"

const CommercialProjects = () => {
  return (
    <div className="icon-container">
      <div className="icon-image">
        <CommercialProjectsIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Commercial Projects</SmallH3Title>
      </div>
      <div className="icon-content">
        <SmallParagraphs>
          We work on new commercial projects including hotels, apartment
          buildings, commercial bays, restaurants, and office buildings. We also
          do tenant improvements.
        </SmallParagraphs>
      </div>
    </div>
  )
}

export default CommercialProjects
