import React from "react"
import styled from "styled-components"
import MainLogo from "../../MainLogo/MainLogo"

const MainLogoStyled = styled.div`
  width: 100%;
  max-width: 35rem;
  margin: 2rem auto;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(20%);
  }
`

const MainNavLogo = props => {
  return (
    <MainLogoStyled>
      <MainLogo />
    </MainLogoStyled>
  )
}

export default MainNavLogo
