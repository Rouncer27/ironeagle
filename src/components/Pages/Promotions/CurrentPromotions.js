import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import PromoImageTwo from "../../Utilities/Images/PromoImageTwo"

const CurrentPromotionsStyled = styled.section`
  .imageWrap {
    position: relative;
    width: 100%;
  }
`

const CurrentPromotions = () => {
  return (
    <CurrentPromotionsStyled>
      <StandardWrapper>
        <div className="imageWrap">
          <PromoImageTwo />
        </div>
      </StandardWrapper>
    </CurrentPromotionsStyled>
  )
}

export default CurrentPromotions
