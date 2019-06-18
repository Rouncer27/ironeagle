import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Contact/Intro"
import Location from "../components/Pages/Contact/Location"
import Check from "../components/Pages/Contact/Check"
import HomeBuilders from "../components/Pages/Contact/HomeBuilders"
import NextGeneration from "../components/Pages/Contact/NextGeneration"
import JobListing from "../components/Pages/Contact/JobListing"

export default class Contact extends Component {
  render() {
    // const jobPostings =
    //   this.props.data.allWordpressWpJobPosting.edges.length > 0
    //     ? this.props.data.allWordpressWpJobPosting.edges
    //     : []

    const jobPostings = []
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Are you ready? We are here to listen"
          description="Give us a call, we are happy to speak with you. We can answer your questions and provide more information on your specific heating and cooling needs."
          keywords={[
            "contact us",
            "call us",
            "questions",
            "heating",
            "cooling",
            "air conditioning",
            "refrigeration",
            "furnaces",
            "airdrie",
            "furnace checklist",
            "free quote",
          ]}
        />
        <Intro location={this.props.location} />
        <Location />
        <Check />
        <HomeBuilders />
        <NextGeneration />
        <JobListing jobPostings={jobPostings} />
      </Layout>
    )
  }
}

// export const query = graphql`
//   query jobPosting {
//     allWordpressWpJobPosting {
//       edges {
//         node {
//           acf {
//             _ire_job_posting_title
//             _ire_job_posting_location
//             _ire_job_posting_details
//             _ire_job_posting_link
//           }
//         }
//       }
//     }
//   }
// `
