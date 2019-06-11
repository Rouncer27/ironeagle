import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Contact/Intro"
import Location from "../components/Pages/Contact/Location"
import Check from "../components/Pages/Contact/Check"
import HomeBuilders from "../components/Pages/Contact/HomeBuilders"
import NextGeneration from "../components/Pages/Contact/NextGeneration"

export default class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Intro location={this.props.location} />
        <Location />
        <Check />
        <HomeBuilders />
        <NextGeneration />
      </Layout>
    )
  }
}
