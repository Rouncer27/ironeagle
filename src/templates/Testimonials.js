import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Pages/Testimonials/Intro"

export default class Testimonials extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Intro />
      </Layout>
    )
  }
}
