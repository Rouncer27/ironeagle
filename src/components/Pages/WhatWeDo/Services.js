import React from "react"
import styled from "styled-components"

import { RegularH2Title } from "../../styles/Commons/Titles"
import { FullScreenWrapper } from "../../styles/Commons/Wrappers"

import AirConditioning from "./ServicesIcons/AirConditioning"
import NewHomeBuilds from "./ServicesIcons/NewHomeBuilds"
import Furnaces from "./ServicesIcons/Furnaces"
import Renovations from "./ServicesIcons/Renovations"
import Refrigeration from "./ServicesIcons/Refrigeration"
import Hvac from "./ServicesIcons/Hvac"
import CommercialProjects from "./ServicesIcons/CommercialProjects"

const ServicesStyled = styled.section`
  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 2rem 0;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 4rem 0;
  }

  .services-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;

    .icon-container {
      width: 50%;
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 2rem;
      border-left: solid 0.1rem ${props => props.theme.colorPrim};

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 33.33%;
        padding: 0 2rem;
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

      .icon-content {
        text-align: center;
      }
    }

    .icon-container:nth-of-type(2n + 1) {
      border-left: none;

      @media (min-width: ${props => props.theme.bpTablet}) {
        border-left: solid 0.1rem ${props => props.theme.colorPrim};
      }
    }

    .icon-container:nth-of-type(3n + 1) {
      @media (min-width: ${props => props.theme.bpTablet}) {
        border-left: none;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        border-left: solid 0.1rem ${props => props.theme.colorPrim};
      }
    }

    .icon-container:nth-of-type(4n + 1) {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        border-left: none;
      }
    }
  }
`

const Services = () => {
  return (
    <ServicesStyled>
      <FullScreenWrapper>
        <div>
          <RegularH2Title>Our Services Include:</RegularH2Title>
        </div>
        <div className="services-icons">
          <NewHomeBuilds />
          <Furnaces />
          <Renovations />
          <AirConditioning />
          <Refrigeration />
          <Hvac />
          <CommercialProjects />
        </div>
      </FullScreenWrapper>
    </ServicesStyled>
  )
}

export default Services
