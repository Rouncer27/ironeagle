import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Contact/Intro"
import Location from "../components/Pages/Contact/Location"

export default class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Intro location={this.props.location} />
        <Location />
      </Layout>
    )
  }
}
