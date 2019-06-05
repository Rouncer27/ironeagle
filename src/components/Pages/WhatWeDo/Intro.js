import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = () => {
  const title = "We ensure that your household system exceeds your expectation."
  const paraContent =
    "Iron Eagle has continued to provide customers with quality work and fair prices on all types of heating and cooling projects."
  const yellowContent = "Guaranteed <span>24/7 Emergency</span> repair!"
  return (
    <section>
      <StandardWrapper>
        <IntroContent
          title={title}
          paraContent={paraContent}
          yellowContent={yellowContent}
        />
        <IntroGraphicVideo video={backgroundVideo} />
      </StandardWrapper>
    </section>
  )
}

export default Intro
