import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class WhatWeDo extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <h1>WhatWeDo Page</h1>
      </Layout>
    )
  }
}
