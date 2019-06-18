import React from "react"
import { BigH2Title, BigH1Title } from "../../styles/Commons/Titles"

const IntroTitle = ({ content, isHomePage }) => {
  const introTitlePage = isHomePage ? (
    <BigH1Title>{content}</BigH1Title>
  ) : (
    <BigH1Title>{content}</BigH1Title>
  )
  return <div>{introTitlePage}</div>
}

export default IntroTitle
