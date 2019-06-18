import React from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../styles/Commons/Wrappers"
import { SmallH2Title } from "../../styles/Commons/Titles"

import JobListingItem from "./JobListingItem"

const JobListingStyled = styled.section`
  .job-listings-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const JobListing = ({ jobPostings }) => {
  const postings = jobPostings !== undefined ? jobPostings : []
  let postingsDisplay = false

  if (postings.length > 0) {
    postingsDisplay = postings.map((job, index) => {
      return (
        <JobListingItem
          key={index}
          title={job.node.acf._ire_job_posting_title}
          location={job.node.acf._ire_job_posting_location}
          details={job.node.acf._ire_job_posting_details}
          link={job.node.acf._ire_job_posting_link}
        />
      )
    })
  } else {
    postingsDisplay =
      "Sorry, there are currently no job posting. Please check back later."
  }

  return (
    <JobListingStyled>
      <FullScreenWrapper>
        <div>
          <SmallH2Title>Listing For Job Opportunities</SmallH2Title>
        </div>
        <div className="job-listings-container">{postingsDisplay}</div>
      </FullScreenWrapper>
    </JobListingStyled>
  )
}

export default JobListing
