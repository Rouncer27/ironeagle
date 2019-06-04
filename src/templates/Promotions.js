import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Promotions extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <h1>Promotions Page</h1>
      </Layout>
    )
  }
}
