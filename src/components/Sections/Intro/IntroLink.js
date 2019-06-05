import React from "react"
import styled from "styled-components"

import { UnderlineLinks } from "../../styles/Commons/Buttons"

const IntroLinkStyled = styled.div`
  margin-bottom: 3rem;
`

const IntroLink = ({ content, url }) => {
  return (
    <IntroLinkStyled>
      <UnderlineLinks className="intro__content--number">
        <a href={url}>{content}</a>
      </UnderlineLinks>
    </IntroLinkStyled>
  )
}

export default IntroLink
