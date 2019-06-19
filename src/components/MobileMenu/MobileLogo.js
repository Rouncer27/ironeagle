import React from "react"
import styled from "styled-components"
import MainLogo from "../MainLogo/MainLogo"

const MobileLogoStyled = styled.div`
  width: 100%;
  max-width: 12.5rem;
  margin: 1rem auto;
  padding: 1rem;
`

const MobileLogo = () => {
  return (
    <MobileLogoStyled className="mobile-logo">
      <MainLogo />
    </MobileLogoStyled>
  )
}

export default MobileLogo
