import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TraneProducts from "../components/Pages/Trane/TraneProducts"

const Trane = props => {
  return (
    <Layout location={props.location}>
      <SEO keywords={[]} />
      <TraneProducts />
    </Layout>
  )
}

export default Trane
