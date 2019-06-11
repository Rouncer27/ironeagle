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
  }
`

const JobListing = ({ jobPostings }) => {
  return (
    <JobListingStyled>
      <FullScreenWrapper>
        <div>
          <SmallH2Title>Listing For Job Opportunities</SmallH2Title>
        </div>
        <div className="job-listings-container">
          {jobPostings.length > 0 &&
            jobPostings.map((job, index) => {
              return (
                <JobListingItem
                  key={index}
                  title={job.node.acf._ire_job_posting_title}
                  location={job.node.acf._ire_job_posting_location}
                  details={job.node.acf._ire_job_posting_details}
                  link={job.node.acf._ire_job_posting_link}
                />
              )
            })}
        </div>
      </FullScreenWrapper>
    </JobListingStyled>
  )
}

export default JobListing
