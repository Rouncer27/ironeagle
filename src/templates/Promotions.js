import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Promotions/Intro"
import CurrentPromotions from "../components/Pages/Promotions/CurrentPromotions"

export default class Promotions extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Our latest promotions and specialty offers"
          description="Iron Eagle has continued to provide customers with quality work and fair prices on repairs, new furnaces, air conditioners, HVAC systems, and refrigeration of all types."
          keywords={[
            "promotions",
            "specialty offers",
            "products",
            "services",
            "quality work",
            "fair pricing",
            "repairs",
            "installation",
            "maintenance",
            "furnaces",
            "air conditioners",
            "HVAC systems",
            "refrigeration",
            "heating",
            "cooling",
            "free quote",
          ]}
        />
        <Intro />
        <CurrentPromotions />
      </Layout>
    )
  }
}
