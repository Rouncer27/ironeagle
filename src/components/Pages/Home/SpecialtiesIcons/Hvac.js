import React from "react"

import { SmallH3Title } from "../../../styles/Commons/Titles"
import HvacIcon from "../../../Icons/HvacIcon"

const Hvac = () => {
  return (
    <div>
      <div className="icon-image">
        <HvacIcon />
      </div>
      <div className="icon-title">
        <SmallH3Title>
          Heating, Ventilation, And Air Conditioning Systems (HVAC)
        </SmallH3Title>
      </div>
    </div>
  )
}

export default Hvac
