import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/About/Intro"
import Services from "../components/Pages/About/Services"
import Peace from "../components/Pages/About/Peace"
import Serving from "../components/Pages/About/Serving"
import Referral from "../components/Pages/About/Referral"

export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="You Can Rely On Us"
          description="Iron Eagle employs over 30 people, both journeymen and apprentices. Based in Airdrie, we also work in the surrounding communities of Calgary and High River."
          keywords={[
            "dedicated",
            "emergency repair",
            "passion",
            "heating",
            "air conditioning",
            "refrigeration",
            "peace of mind",
            "southern alberta",
            "airdrie",
            "calgary",
            "high river",
            "free quote",
          ]}
        />
        <Intro />
        <Services />
        <Peace />
        <Serving />
        <Referral />
      </Layout>
    )
  }
}
