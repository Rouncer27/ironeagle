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
        <SEO title="Home" />
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
