import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

import { RegularH2TitleBlue } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const WorkStyled = styled.section`
  position: relative;
  margin-bottom: 5rem;
  z-index: 5;

  .work-title,
  .work-content {
    width: 100%;
    text-align: center;
  }

  .work-slider {
    width: 100%;
  }

  .work-background {
    top: auto;
    bottom: 5rem;
    max-height: 40rem;
    background: #00adef;
  }
`

const Work = ({ images }) => {
  return (
    <WorkStyled>
      <StandardWrapper>
        <div className="work-title">
          <RegularH2TitleBlue>Work We’ve Done</RegularH2TitleBlue>
        </div>
        <div className="work-content">
          <StandardParagraph>
            Here are some of the projects we have worked on.{" "}
          </StandardParagraph>
        </div>
        <Slider
          className="work-slider"
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={10000}
          speed={750}
          arrows={false}
          adaptiveHeight={false}
          centerPadding={`0px`}
          centerMode={false}
          dots={true}
        >
          {images.map((img, index) => {
            return (
              <div key={index}>
                <Img
                  fluid={img.image.localFile.childImageSharp.fluid}
                  alt={img.image.alt_text}
                />
              </div>
            )
          })}
        </Slider>
      </StandardWrapper>
      <AngleGreyBackground className="work-background" />
    </WorkStyled>
  )
}

export default Work
