import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = () => {
  const title = "Our Latest Promotions & Specialty Offers!"
  const paraContent =
    "Give us a call to speak with one of us regarding service and product promotions. Iron Eagle has continued to provide customers with quality work and fair prices on repairs, new furnaces, air conditioners, HVAC systems, and refrigeration of all types. "
  return (
    <section>
      <StandardWrapper>
        <IntroContent title={title} paraContent={paraContent} />
        <IntroGraphicVideo video={backgroundVideo} />
      </StandardWrapper>
    </section>
  )
}

export default Intro
