import React from "react"
import styled from "styled-components"

import IntroTitle from "./IntroTitle"
import IntroParagraph from "./IntroParagraph"
import IntroLink from "./IntroLink"
import IntroYellowCall from "./IntroYellowCall"
import IntroNotWorking from "./IntroNotWorking"

const IntroContentStyled = styled.div`
  position: relative;
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
  isHome,
}) => {
  let notWorking = false
  if (location !== undefined) {
    if (location.pathname === "/contact" || location.pathname === "/contact/") {
      notWorking = true
    }
  }

  const isHomePage = isHome ? true : false

  return (
    <IntroContentStyled>
      {title && <IntroTitle content={title} isHomePage={isHomePage} />}
      {paraContent && <IntroParagraph content={paraContent} />}
      {linkContent && linkURL && (
        <IntroLink content={linkContent} url={linkURL} />
      )}
      {yellowContent && (
        <IntroYellowCall content={yellowContent} location={location} />
      )}
      {notWorking && <IntroNotWorking />}
    </IntroContentStyled>
  )
}

export default IntroContent
