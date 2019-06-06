import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/About/Intro"
import Services from "../components/Pages/About/Services"
import Peace from "../components/Pages/About/Peace"
import Serving from "../components/Pages/About/Serving"

export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About Page" />
        <Intro />
        <Services />
        <Peace />
        <Serving />
      </Layout>
    )
  }
}
