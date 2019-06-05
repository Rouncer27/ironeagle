import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = () => {
  const title = "You can rely on us. We are dedicated."
  const paraContent =
    "Our name is Iron Eagle. “Iron” represents the physical metal product and “Eagle” symbolizes strength. Together, they represent our passion."
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
