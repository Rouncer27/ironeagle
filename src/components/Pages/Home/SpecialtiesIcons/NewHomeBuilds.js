import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import NewHomeIcon from "../../../Icons/NewHomeIcon"

const NewHomeBuilds = () => {
  return (
    <div>
      <div className="icon-image">
        <NewHomeIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>New Home Builds</SmallH3Title>
      </div>
    </div>
  )
}

export default NewHomeBuilds
