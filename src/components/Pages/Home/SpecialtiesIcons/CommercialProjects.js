import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import CommercialProjectsIcon from "../../../Icons/CommercialProjectsIcon"

const CommercialProjects = () => {
  return (
    <div>
      <div className="icon-image">
        <CommercialProjectsIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Commercial Projects</SmallH3Title>
      </div>
    </div>
  )
}

export default CommercialProjects
