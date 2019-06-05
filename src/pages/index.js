import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Home/Intro"
import Quote from "../components/Pages/Home/Quote"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <Intro />
    <Quote />
  </Layout>
)

export default IndexPage
