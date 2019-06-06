import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Pages/WhatWeDo/Intro"
import Services from "../components/Pages/WhatWeDo/Services"
import Areas from "../components/Sections/Areas"
import ThreeColumns from "../components/Pages/WhatWeDo/ThreeColumns"
import TraneSupplier from "../components/Pages/WhatWeDo/TraneSupplier"
import Work from "../components/Pages/WhatWeDo/Work"

export default class WhatWeDo extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Intro />
        <Services />
        <Areas location={this.props.location} />
        <ThreeColumns />
        <TraneSupplier />
        <Work />
      </Layout>
    )
  }
}
