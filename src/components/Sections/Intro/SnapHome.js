import React, { useEffect } from "react"
import styled from "styled-components"

const SnapHomeDiv = styled.div`
  margin-top: 5rem;
  margin-right: auto;
  margin-bottom: -10rem;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const SnapHome = () => {
  useEffect(() => {
    const d = document,
      s = d.createElement("script")
    s.src =
      "https://forms.snapfinancial.com/weblink/embed.ashx?id=6E93E652C6A4A743E80692FA116F12E452F75D75C5A1FF4ED5891E84896C2774&s=rectangle"
    ;(d.head || d.body).appendChild(s)
  }, [])
  return (
    <SnapHomeDiv>
      <div id="weblink_embed_container" />
    </SnapHomeDiv>
  )
}

export default SnapHome
