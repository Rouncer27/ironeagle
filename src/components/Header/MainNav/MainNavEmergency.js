import React from "react"
import styled from "styled-components"

const EmergencyStyled = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    text-align: right;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;

    span {
      color: ${props => props.theme.colorPrim};
    }

    a {
      transition: all 0.3s ease;
      font-family: ${props => props.theme.fontSec};
      font-weight: 700;
    }
  }
`

const MainNavEmergency = () => {
  return (
    <EmergencyStyled>
      <p>
        <span>24/7</span> Emergency Service{" "}
        <a href="tel:+14039481333">403.948.1333</a>
      </p>
    </EmergencyStyled>
  )
}

export default MainNavEmergency
