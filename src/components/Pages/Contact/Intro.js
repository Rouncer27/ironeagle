import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = props => {
  const location = props.location
  const title = "Are you ready? We are here to listen."
  const paraContent =
    "Give us a call, we are happy to speak with you. We can answer your questions and provide more information on your specific heating and cooling needs."
  const yellowContent =
    "Call <span>us for a quote</span> <a href='tel:+14039481333'>403.948.1333</a>"
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
