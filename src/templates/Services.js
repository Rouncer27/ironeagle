import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Services/Intro"
import Types from "../components/Pages/Services/Types"
import ServicesLinks from "../components/Pages/Services/ServicesLinks"

const AirConditioning = props => {
  return (
    <Layout location={props.location}>
      <SEO />
      <Intro location={props.location} />
      <Types />
      <ServicesLinks location={props.location} />
    </Layout>
  )
}

export default AirConditioning
