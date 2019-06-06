import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Services/Intro"

const AirConditioning = props => {
  return (
    <Layout location={props.location}>
      <SEO />
      <Intro location={props.location} />
    </Layout>
  )
}

export default AirConditioning
