import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = () => {
  const title =
    "We Install, Maintain + Repair Furnaces, HVAC systems, & much more!"
  const paraContent =
    "Iron Eagle has continued to provide customers with quality work and fair prices on repairs, new furnaces, air conditioners, HVAC systems, and refrigeration of all types."
  const linkContent = "403.948.1333"
  const linkURL = "tel+14039481333"
  const yellowContent =
    "Call <span>us for a quote</span> <a href='tel:+14039481333'>403.948.1333</a>"
  return (
    <section>
      <StandardWrapper>
        <IntroContent
          title={title}
          isHome={true}
          paraContent={paraContent}
          linkContent={linkContent}
          linkURL={linkURL}
          yellowContent={yellowContent}
        />
        <IntroGraphicVideo video={backgroundVideo} />
      </StandardWrapper>
    </section>
  )
}

export default Intro
