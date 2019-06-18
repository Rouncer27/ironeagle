import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Services/Intro"
import Types from "../components/Pages/Services/Types"
import TraneProducts from "../components/Pages/Services/TraneProducts"
import ServicesLinks from "../components/Pages/Services/ServicesLinks"

const AirConditioning = props => {
  return (
    <Layout location={props.location}>
      <SEO keywords={[]} />
      <Intro location={props.location} />
      <TraneProducts />
      <Types />
      <ServicesLinks location={props.location} />
    </Layout>
  )
}

export default AirConditioning
