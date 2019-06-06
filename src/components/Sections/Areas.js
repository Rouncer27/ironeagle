import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../styles/Commons/Wrappers"
import { RegularH2TitleBlue } from "../styles/Commons/Titles"
import WaveSingle from "../Svgs/WaveSingle"

const AreasStyled = styled.div`
  padding: 2rem 0;
  box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.16);

  .areas-title {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .areas-names {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .areas-name {
      position: relative;
      text-align: center;
      width: calc(50% - 3rem);
      margin: 1.5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(20% - 3rem);
        margin: 1.5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(20% - 3rem);
        margin: 1.5rem;
      }

      p {
        display: block;
        position: relative;
        margin: 0;
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontSec};
        font-weight: 800;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
      .wave-single-icon {
        position: absolute;
        top: 50%;
        left: -3rem;
        width: 2.5rem;
        height: 2.5rem;
        transform: translateY(-50%);
      }
    }

    .areas-name:nth-of-type(2n + 1) {
      .wave-single-icon {
        display: none;
      }
      @media (min-width: ${props => props.theme.bpTablet}) {
        .wave-single-icon {
          display: block;
        }
      }
    }

    .areas-name:nth-of-type(5n + 1) {
      @media (min-width: ${props => props.theme.bpTablet}) {
        .wave-single-icon {
          display: none;
        }
      }
    }
  }
`

const Areas = ({ location }) => {
  let areasTitle = false
  if (
    location.pathname === "/what-we-do" ||
    location.pathname === "/what-we-do/"
  ) {
    areasTitle = (
      <div className="areas-title">
        <RegularH2TitleBlue>Areas Of Work</RegularH2TitleBlue>
      </div>
    )
  }
  return (
    <AreasStyled>
      {areasTitle && areasTitle}
      <StandardWrapper>
        <div className="areas-names">
          <div className="areas-name">
            <p>Airdrie</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Calgary</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Crossfield</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Drumheller</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Sundre</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Carstairs</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>Didsbury</p>
            <WaveSingle />
          </div>
          <div className="areas-name">
            <p>High River</p>
            <WaveSingle />
          </div>
        </div>
      </StandardWrapper>
    </AreasStyled>
  )
}

export default Areas
