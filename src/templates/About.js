import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/About/Intro"

export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About Page" />
        <Intro />
      </Layout>
    )
  }
}
