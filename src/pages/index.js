import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Home/Intro"
import Quote from "../components/Pages/Home/Quote"
import Specialties from "../components/Pages/Home/Specialties"
import Quality from "../components/Pages/Home/Quality"
import Areas from "../components/Pages/Home/Areas"
import Referral from "../components/Pages/Home/Referral"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <Intro />
    <Quote />
    <Specialties />
    <Quality />
    <Areas />
    <Referral />
  </Layout>
)

export default IndexPage
