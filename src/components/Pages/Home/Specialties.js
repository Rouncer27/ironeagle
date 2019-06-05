import React from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../styles/Commons/Wrappers"
import { RegularH2TitleBlue } from "../../styles/Commons/Titles"
import { StandardParagraph } from "../../styles/Commons/Paragraphs"

import AirConditioning from "./SpecialtiesIcons/AirConditioning"
import NewHomeBuilds from "./SpecialtiesIcons/NewHomeBuilds"
import Furnaces from "./SpecialtiesIcons/Furnaces"
import Renovations from "./SpecialtiesIcons/Renovations"
import Refrigeration from "./SpecialtiesIcons/Refrigeration"
import Hvac from "./SpecialtiesIcons/Hvac"
import CommercialProjects from "./SpecialtiesIcons/CommercialProjects"

const SpecialtiesStyled = styled.section`
  .special-title {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 80rem;
    }
  }

  .special-content {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 85rem;
    }
  }

  .special-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;

    > div {
      width: 50%;
      margin-top: 2rem;
      margin-bottom: 2rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 33.33%;
        padding: 0 1rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 25%;
        padding: 3rem 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .icon-image {
        max-width: 7.5rem;
        margin: 0 auto;
      }

      .icon-title {
        text-align: center;
      }
    }
  }
`

const Specialties = () => {
  return (
    <SpecialtiesStyled>
      <FullScreenWrapper>
        <div className="special-title">
          <RegularH2TitleBlue>Our Specialties</RegularH2TitleBlue>
        </div>
        <div className="special-content">
          <StandardParagraph>
            Our quality work from start to finish adheres to all current
            building codes. We are dedicated to time management, team work,
            quality and consistency of all projects.
          </StandardParagraph>
        </div>
        <div className="special-icons">
          <NewHomeBuilds />
          <Furnaces />
          <Renovations />
          <AirConditioning />
          <Refrigeration />
          <Hvac />
          <CommercialProjects />
        </div>
      </FullScreenWrapper>
    </SpecialtiesStyled>
  )
}

export default Specialties
