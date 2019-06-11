import React from "react"
import styled from "styled-components"

import { SmallH3Title } from "../../styles/Commons/Titles"
import { SmallParagraphs } from "../../styles/Commons/Paragraphs"
import { UnderlineLinks } from "../../styles/Commons/Buttons"

const JobListingItemStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 2rem 8rem;
  text-align: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 50%;
    padding: 3rem 3rem 8rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(33.3333% - 5rem);
    margin: 2.5rem;
    padding: 3rem 3rem 8rem;
  }

  .job-location {
    p {
      color: ${props => props.theme.colorPrim};
      font-weight: 300;
    }
  }

  .job-link {
    position: absolute;
    right: 0;
    bottom: 3rem;
    left: 0;
  }
`

const JobListingItem = ({ title, location, details, link }) => {
  return (
    <JobListingItemStyled>
      <div>
        <SmallH3Title>{title}</SmallH3Title>
      </div>
      <div className="job-location">
        <p>Location: {location}</p>
      </div>
      <div>
        <SmallParagraphs>{details}</SmallParagraphs>
      </div>
      {link !== "" && (
        <UnderlineLinks className="job-link">
          <a href={link}>Learn More</a>
        </UnderlineLinks>
      )}
    </JobListingItemStyled>
  )
}

export default JobListingItem
