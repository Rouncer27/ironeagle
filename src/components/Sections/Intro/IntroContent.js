import React from "react"
import styled from "styled-components"

import IntroTitle from "./IntroTitle"
import IntroParagraph from "./IntroParagraph"
import IntroLink from "./IntroLink"
import IntroYellowCall from "./IntroYellowCall"

const IntroContentStyled = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 60%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: 60%;
  }
`

const IntroContent = ({
  title,
  paraContent,
  linkContent,
  linkURL,
  yellowContent,
  location,
}) => {
  return (
    <IntroContentStyled>
      {title && <IntroTitle content={title} />}
      {paraContent && <IntroParagraph content={paraContent} />}
      {linkContent && linkURL && (
        <IntroLink content={linkContent} url={linkURL} />
      )}
      {yellowContent && (
        <IntroYellowCall content={yellowContent} location={location} />
      )}
    </IntroContentStyled>
  )
}

export default IntroContent
