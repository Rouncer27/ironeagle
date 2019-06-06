import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

import { RegularH2TitleBlue } from "../../styles/Commons/Titles"
import { FullScreenWrapper } from "../../styles/Commons/Wrappers"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const WorkStyled = styled.section`
  position: relative;
  margin-bottom: 5rem;
  z-index: 5;

  @media (min-width: ${props => props.theme.bpTablet}) {
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin-bottom: 15rem;
  }

  .work-title,
  .work-content {
    width: 100%;
    text-align: center;
  }

  .work-slider {
    width: 100%;
    padding-top: 2.5rem;

    .slick-track {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
    }

    .slick-slide {
      .work-slide {
        transform: scale(0.7);
        transition: all 0.4s ease;
      }
    }

    .slick-center {
      .work-slide {
        transform: scale(1.1);
      }
    }
  }

  .work-background {
    top: auto;
    bottom: 0;
    max-height: 40rem;
    background: #00adef;
  }
`

const Work = ({ images }) => {
  const settings = {
    centerPadding: `0px`,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 750,
    infinite: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <WorkStyled>
      <FullScreenWrapper className="work-wrapper">
        <div className="work-title">
          <RegularH2TitleBlue>Work We’ve Done</RegularH2TitleBlue>
        </div>
        <div className="work-content">
          <StandardParagraph>
            Here are some of the projects we have worked on.{" "}
          </StandardParagraph>
        </div>
        <Slider {...settings} className="work-slider">
          {images.map((img, index) => {
            return (
              <div key={index} className="work-slide">
                <Img
                  fluid={img.image.localFile.childImageSharp.fluid}
                  alt={img.image.alt_text}
                />
              </div>
            )
          })}
        </Slider>
      </FullScreenWrapper>
      <AngleGreyBackground className="work-background" />
    </WorkStyled>
  )
}

export default Work
