import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"

const CurrentPromotionsStyled = styled.section`
  h2 {
    text-align: center;
  }
`

const CurrentPromotions = () => {
  return (
    <CurrentPromotionsStyled>
      <StandardWrapper>
        <h2>
          There are no current promotions.
          <br /> Please check back again soon!
        </h2>
      </StandardWrapper>
    </CurrentPromotionsStyled>
  )
}

export default CurrentPromotions
