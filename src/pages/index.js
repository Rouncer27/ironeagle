import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Home/Intro"
import Quote from "../components/Pages/Home/Quote"
import Specialties from "../components/Pages/Home/Specialties"
import Quality from "../components/Pages/Home/Quality"
import Areas from "../components/Sections/Areas"
import Referral from "../components/Pages/Home/Referral"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO
      title="Heating, Air Conditioning, HVAC, Refrigeration"
      description="Iron Eagle, quality work and fair prices on repairs, new furnaces, air conditioners, HVAC systems, and refrigeration of all types."
      keywords={[
        "heating",
        "furnace",
        "air conditioning",
        "HVAC",
        "refrigeration",
        "install",
        "maintain",
        "repair",
        "air conditioner",
        "free quote",
        "emergency repair",
        "renovations",
        "new home builds",
        "commercial projects",
      ]}
    />
    <Intro />
    <Quote />
    <Specialties />
    <Quality />
    <Areas location={props.location} />
    <Referral />
  </Layout>
)

export default IndexPage
