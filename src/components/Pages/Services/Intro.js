import React from "react"
import styled from "styled-components"

import { SmallerH1TitleBlue, BigH2Title } from "../../styles/Commons/Titles"
import { StandardParagraphContainer } from "../../styles/Commons/Paragraphs"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import AcBlower from "../../Svgs/AcBlower"
import BlockHeater from "../../Svgs/BlockHeater"
import Cubes from "../../Svgs/Cubes"

import BackgroundHoneyComb from "../../Svgs/BackGroundHoneyComb"

const IntroStyled = styled.section`
  position: relative;
  width: 100%;

  .intro-content {
    position: relative;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 60%;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 65%;
    }
  }

  .intro-paragraphs {
    width: 100%;
    margin: 0;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 55rem;
    }
  }

  .intro-icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 40%;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 35%;
    }

    .ac-blower-icon,
    .block-heater-icon,
    .cubes-icons {
      max-width: 25rem;
      margin: auto;

      svg {
        width: 100%;
      }
    }
  }

  .intro-background {
    position: absolute;
    top: -5%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: -1;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: -10%;
      left: 0;
      width: 60%;
      height: 100%;
      opacity: 0.75;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      top: 0;
      width: 50%;
      max-width: 75rem;
      height: 100%;
    }

    svg {
      width: 120%;
      height: 120%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 100%;
        height: 100%;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 100%;
        height: 100%;
      }
    }
  }
`

const Intro = ({ location }) => {
  const urlArray = location.pathname.split("/")
  const pageName = urlArray[urlArray.length - 1]

  let subTitle = false
  let mainTitle = false
  let mainContent = false
  let Icon = false

  if (pageName === "air-conditioning") {
    subTitle = "Air Conditioning"
    mainTitle = "Meeting all of your air conditioning needs."
    mainContent =
      "<p>We ensure that you are comfortable and cool with all installation, repair, and maintenance of both residential and commercial air conditioning systems. We routinely service air conditioning systems in homes and businesses to maintain optimal function and comfort in your home.</p><p>If you have any questions about products or projects, give us a call!</p>"
    Icon = AcBlower
  } else if (pageName === "heating") {
    subTitle = "Heating"
    mainTitle = "Your comfort is our priority."
    mainContent =
      "<p>Our trained technicians ensure that your furnace works efficiently when you need it. A new furnace does not have to cost you a lot and our range of sustainable and energy efficient products gives you plenty of options.</p><p>We install, repair, and maintain your furnace, including 24/7 Emergency Services. If your furnace is not working, consult our Furnace Checklist before calling a technician.</p><p>If you have any questions, give us a call to discuss any projects or products for your home or business. We look forward to hearing from you.</p>"
    Icon = BlockHeater
  } else if (pageName === "refrigeration") {
    subTitle = "Refrigeration"
    mainTitle = "Keeping your products at a safe temperature."
    mainContent =
      "<p>Our work includes commercial refrigeration projects. Our technicians ensure that your refrigeration system is working efficiently to keep everything from groceries to restaurant storage cool and at a safe temperature.</p><p>We install, repair, and maintain your commercial cooling systems including refrigerators, reach-in coolers, and freezers. We also install and maintain commercial walk-in refrigerators and freezers.</p><p>If you have any questions, give us a call to book a free quote and to discuss projects or products with our technicians.</p>"
    Icon = Cubes
  }

  return (
    <IntroStyled>
      <StandardWrapper>
        <div className="intro-content">
          <div>
            {subTitle && <SmallerH1TitleBlue>{subTitle}</SmallerH1TitleBlue>}
            {mainTitle && <BigH2Title>{mainTitle}</BigH2Title>}
          </div>
          {mainContent && (
            <StandardParagraphContainer
              className="intro-paragraphs"
              dangerouslySetInnerHTML={{ __html: mainContent }}
            />
          )}
        </div>
        {Icon && (
          <div className="intro-icon">
            <Icon />
          </div>
        )}
      </StandardWrapper>
      <div className="intro-background">
        <BackgroundHoneyComb />
      </div>
    </IntroStyled>
  )
}

export default Intro
