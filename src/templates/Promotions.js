import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Promotions/Intro"
import CurrentPromotions from "../components/Pages/Promotions/CurrentPromotions"

export default class Promotions extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[]} />
        <Intro />
        <CurrentPromotions />
      </Layout>
    )
  }
}
