import React from "react"
import styled from "styled-components"

const EmployeeStyled = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: block;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    text-align: right;
  }

  a {
    transition: all 0.3s ease;
    border-bottom: 0.7rem solid ${props => props.theme.colorPrim};
    color: ${props => props.theme.black};
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      border-bottom: 0.7rem solid ${props => props.theme.colorSec};
    }
  }
`

const MainNavEmployee = () => {
  return (
    <EmployeeStyled>
      <a href="#">Employee Access</a>
    </EmployeeStyled>
  )
}

export default MainNavEmployee
