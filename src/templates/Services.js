import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Pages/Services/Intro"
import Types from "../components/Pages/Services/Types"
import TraneProducts from "../components/Pages/Services/TraneProducts"
import ServicesLinks from "../components/Pages/Services/ServicesLinks"

const AirConditioning = props => {
  let serviceType = false
  let metaTitle = "Air Conditioning. Heating. Refrigeration. - Iron Eagle"
  let metaDesc =
    "Meeting all of your air conditioning needs. Your comfort is our priority. Keeping your products at a safe temperature."
  let metaKeys = ["air conditioning", "heating", "furnace", "refrigeration"]

  if (
    props.location.pathname === "/what-we-do/air-conditioning" ||
    props.location.pathname === "/what-we-do/air-conditioning/"
  ) {
    serviceType = "ac"
  } else if (
    props.location.pathname === "/what-we-do/heating" ||
    props.location.pathname === "/what-we-do/heating/"
  ) {
    serviceType = "heat"
  } else if (
    props.location.pathname === "/what-we-do/refrigeration" ||
    props.location.pathname === "/what-we-do/refrigeration/"
  ) {
    serviceType = "ref"
  }

  if (serviceType === "ac") {
    metaTitle = "Air Conditioning - Meeting all of your air conditioning needs."
    metaDesc =
      "We ensure that you are comfortable and cool with all installation, repair, and maintenance of both residential and commercial air conditioning systems."
    metaKeys = [
      "air conditioning",
      "comfortable",
      "cool",
      "installation",
      "maintenance",
      "repair",
      "residential",
      "commercial",
      "systems",
      "function",
      "call us",
      "free quote",
    ]
  } else if (serviceType === "heat") {
    metaTitle = "Heating - Your comfort is our priority."
    metaDesc =
      "Our trained technicians ensure that your furnace works efficiently when you need it.We install, repair, and maintain your furnace, including 24/7 Emergency Services."
    metaKeys = [
      "heating",
      "furnace",
      "installation",
      "repair",
      "maintenance",
      "new furnace",
      "energy efficient products",
      "emergency repair",
      "furnace checklist",
      "sustainable",
      "free quote",
    ]
  } else if (serviceType === "ref") {
    metaTitle = "Refrigeration - Keeping your products at a safe temperature."
    metaDesc =
      "Our work includes commercial refrigeration projects. We install, repair, and maintain your commercial cooling systems including refrigerators, reach-in coolers, and freezers."
    metaKeys = [
      "refrigeration",
      "cool",
      "household",
      "commercial",
      "efficient",
      "safe temperature",
      "installation",
      "repair",
      "maintenance",
      "systems",
      "freezers",
      "coolers",
      "free quote",
    ]
  }

  return (
    <Layout location={props.location}>
      <SEO title={metaTitle} description={metaDesc} keywords={metaKeys} />
      <Intro location={props.location} />
      <TraneProducts />
      <Types />
      <ServicesLinks location={props.location} />
    </Layout>
  )
}

export default AirConditioning
