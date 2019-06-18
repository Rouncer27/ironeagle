import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Pages/Testimonials/Intro"
import TestimonialItems from "../components/Pages/Testimonials/TestimonialItems"

export default class Testimonials extends Component {
  render() {
    const testimonials = this.props.data.allWordpressWpTest.edges
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[]} />
        <Intro />
        <TestimonialItems tests={testimonials} />
      </Layout>
    )
  }
}

export const query = graphql`
  query testimonials {
    allWordpressWpTest {
      edges {
        node {
          acf {
            _ire_test_content
            _ire_test_name
          }
        }
      }
    }
  }
`
