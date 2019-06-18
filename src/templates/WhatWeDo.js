import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Pages/WhatWeDo/Intro"
import Services from "../components/Pages/WhatWeDo/Services"
import Areas from "../components/Sections/Areas"
import ThreeColumns from "../components/Pages/WhatWeDo/ThreeColumns"
import TraneSupplier from "../components/Pages/WhatWeDo/TraneSupplier"
import Work from "../components/Pages/WhatWeDo/Work"

class WhatWeDo extends Component {
  render() {
    const acf = this.props.data.wordpressPage
      ? this.props.data.wordpressPage.acf
      : false

    const workSliderImages = acf._ire_work_images

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Heating, Air Conditioning, Refrigeration, HVAC"
          description="Furnaces, Air Conditioning, Refrigeration, HVAC & More. We ensure that your household system exceeds your expectation."
          keywords={[
            "quality work",
            "fair prices",
            "heating",
            "cooling",
            "household systems",
            "emergency repair",
            "new home builds",
            "furnaces",
            "refrigeration",
            "HVAC",
            "renovations",
            "air conditioning",
            "commercial projects",
            "installation",
            "repair",
            "maintenance",
            "free quote",
            "home owners",
            "contractors",
            "airdrie",
            "calgary",
            "high river",
            "crossfield",
            "carstairs",
            "drumheller",
            "sundre",
            "didsbury",
            "trane",
          ]}
        />
        <Intro />
        <Services />
        <Areas location={this.props.location} />
        <ThreeColumns />
        <TraneSupplier />
        <Work images={workSliderImages} />
      </Layout>
    )
  }
}

export const query = graphql`
  query whatWeDoPage($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _ire_work_images {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default WhatWeDo
