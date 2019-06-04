import React from "react"
import styled from "styled-components"

const MobileFooterStyled = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 2rem;
  text-align: center;

  a {
    transition: all 0.3s ease;
    border-bottom: 0.7rem solid ${props => props.theme.colorPrim};
    color: ${props => props.theme.black};
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      border-bottom: 0.7rem solid ${props => props.theme.colorTert};
    }
  }
`

const MobileFooter = () => {
  return (
    <MobileFooterStyled>
      <a href="#">Employee Access</a>
    </MobileFooterStyled>
  )
}

export default MobileFooter
