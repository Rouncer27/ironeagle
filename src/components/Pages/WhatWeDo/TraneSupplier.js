import React from "react"
import styled from "styled-components"

import { RegularH2Title } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { UnderlineLinks } from "../../styles/Commons/Buttons"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const TraneSupplierStyled = styled.section`
  position: relative;
  padding: 7.5rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 10rem 0;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 12.5rem 0;
  }

  .trane-title,
  .trane-link {
    width: 100%;
    text-align: center;
  }

  .trane-background {
    top: 5rem;
    height: 95%;
    max-height: 40rem;
    transform: rotate(10deg);
  }
`

const TraneSupplier = () => {
  return (
    <TraneSupplierStyled>
      <StandardWrapper>
        <div className="trane-title">
          <RegularH2Title>Iron Eagle is a Trane Supplier</RegularH2Title>
        </div>
        <UnderlineLinks className="trane-link">
          <a href="https://www.trane.com/Index.aspx">Trane Website</a>
        </UnderlineLinks>
      </StandardWrapper>
      <AngleGreyBackground className="trane-background" />
    </TraneSupplierStyled>
  )
}

export default TraneSupplier
