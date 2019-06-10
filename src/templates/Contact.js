import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Contact/Intro"

export default class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Intro location={this.props.location} />
      </Layout>
    )
  }
}
