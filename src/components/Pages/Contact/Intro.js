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
  const yellowContent = "Guaranteed <span>24/7 Emergency</span> repair!"
  return (
    <section>
      <StandardWrapper>
        <IntroContent
          title={title}
          paraContent={paraContent}
          yellowContent={yellowContent}
          location={location}
        />
        <IntroGraphicVideo video={backgroundVideo} />
      </StandardWrapper>
    </section>
  )
}

export default Intro
