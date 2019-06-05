import React from "react"
import styled from "styled-components"

import { StandardParagraph } from "../../styles/Commons/Paragraphs"

const IntroParagraphStyled = styled.div`
  width: 100%;
`

const IntroParagraph = ({ content }) => {
  return (
    <IntroParagraphStyled>
      <StandardParagraph>{content}</StandardParagraph>
    </IntroParagraphStyled>
  )
}

export default IntroParagraph
