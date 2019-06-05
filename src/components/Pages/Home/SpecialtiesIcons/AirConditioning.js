import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import AirConditioningIcon from "../../../Icons/AirConditioningIcon"

const AirConditioning = () => {
  return (
    <div>
      <div className="icon-image">
        <AirConditioningIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>Air Conditioning</SmallH3Title>
      </div>
    </div>
  )
}

export default AirConditioning
