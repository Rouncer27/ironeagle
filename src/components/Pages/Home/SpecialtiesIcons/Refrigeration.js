import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import RefrigerationIcon from "../../../Icons/RefrigerationIcon"

const Refrigeration = () => {
  return (
    <div>
      <div className="icon-image">
        <RefrigerationIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Refrigeration</SmallH3Title>
      </div>
    </div>
  )
}

export default Refrigeration
