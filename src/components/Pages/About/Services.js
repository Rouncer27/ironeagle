import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { SmallerH2Title } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { SmallParagraphs } from "../../styles/Commons/Paragraphs"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

import Heating from "../../Svgs/Heating"
import AirConditioning from "../../Svgs/AirConditioning"
import Refrigeration from "../../Svgs/Refrigeration"

const ServicesStyled = styled.section`
  position: relative;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 3rem 0;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 5rem 0;
  }

  .service-item {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.3333% - 2rem);
      margin: 2rem 1rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 6rem);
      margin: 2rem 3rem;
    }
  }

  .service-icon {
    width: 100%;
    margin: 0 auto;
    max-width: 15rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 10rem;
    }
  }

  .service-background {
    top: 5%;
    height: 95%;
    transform: rotate(10deg);
  }
`

const Services = () => {
  return (
    <ServicesStyled>
      <StandardWrapper>
        <Link to="/about-us" className="service-item">
          <div className="service-icon">
            <Heating />
          </div>
          <div>
            <SmallerH2Title>Heating</SmallerH2Title>
          </div>
          <div>
            <SmallParagraphs>
              We ensure that your furnace stays warm during the winter months.
              Your comfort is our priority.
            </SmallParagraphs>
          </div>
        </Link>

        <Link to="/about-us" className="service-item">
          <div className="service-icon">
            <AirConditioning />
          </div>
          <div>
            <SmallerH2Title>Air Conditioning</SmallerH2Title>
          </div>
          <div>
            <SmallParagraphs>
              When the weather is warm, we ensure that you are comfortable and
              cool with installation, repair, and maintenance of both
              residential and commercial AC systems.
            </SmallParagraphs>
          </div>
        </Link>

        <Link className="service-item">
          <div className="service-icon">
            <Refrigeration />
          </div>
          <div>
            <SmallerH2Title>Refrigeration</SmallerH2Title>
          </div>
          <div>
            <SmallParagraphs>
              Our work includes both household and commercial refrigeration
              projects to ensure that your system is efficient and effective.
            </SmallParagraphs>
          </div>
        </Link>
      </StandardWrapper>
      <AngleGreyBackground className="service-background" />
    </ServicesStyled>
  )
}

export default Services
