import React from "react"
import styled from "styled-components"
import MainLogo from "../MainLogo/MainLogo"

const MobileLogoStyled = styled.div`
  width: 100%;
  max-width: 32.5rem;
  margin: 2.5rem auto;
  padding: 2rem;
`

const MobileLogo = () => {
  return (
    <MobileLogoStyled className="mobile-logo">
      <MainLogo />
    </MobileLogoStyled>
  )
}

export default MobileLogo
