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

  h1 {
    position: absolute;
    top: -200%;
    left: 200%;
    margin: 0;
    padding: 0;
    color: transparent;
    font-size: 0rem;
  }
`

const MainNavLogo = props => {
  return (
    <MainLogoStyled>
      <h1>Iron Eagle - Heating & Air Conditioning</h1>
      <MainLogo />
    </MainLogoStyled>
  )
}

export default MainNavLogo
