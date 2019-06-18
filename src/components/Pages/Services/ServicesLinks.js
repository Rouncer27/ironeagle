import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { SmallerH2Title } from "../../styles/Commons/Titles"
import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { SmallParagraphs } from "../../styles/Commons/Paragraphs"
import { UnderlineLinks } from "../../styles/Commons/Buttons"

import Heating from "../../Svgs/Heating"
import AirConditioning from "../../Svgs/AirConditioning"
import Refrigeration from "../../Svgs/Refrigeration"

const ServicesLinksStyled = styled.section`
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
`

const ServicesLinks = ({ location }) => {
  const urlArray = location.pathname.split("/")
  const pageName = urlArray[urlArray.length - 1]
  return (
    <ServicesLinksStyled>
      <StandardWrapper>
        {pageName !== "heating" && (
          <div className="service-item">
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
            <UnderlineLinks>
              <Link to="/what-we-do/heating">Learn More</Link>
            </UnderlineLinks>
          </div>
        )}

        {pageName !== "air-conditioning" && (
          <div className="service-item">
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
            <UnderlineLinks>
              <Link to="/what-we-do/air-conditioning">Learn More</Link>
            </UnderlineLinks>
          </div>
        )}

        {pageName !== "refrigeration" && (
          <div className="service-item">
            <div className="service-icon">
              <Refrigeration />
            </div>
            <div>
              <SmallerH2Title>Refrigeration</SmallerH2Title>
            </div>
            <div>
              <SmallParagraphs>
                Our work includes commercial refrigeration projects to ensure
                that your system is efficient and effective.
              </SmallParagraphs>
            </div>
            <UnderlineLinks>
              <Link to="/what-we-do/refrigeration">Learn More</Link>
            </UnderlineLinks>
          </div>
        )}
      </StandardWrapper>
    </ServicesLinksStyled>
  )
}

export default ServicesLinks
