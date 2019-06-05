import React from "react"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import IntroContent from "../../Sections/Intro/IntroContent"
import IntroGraphicVideo from "../../Sections/Intro/IntroGraphicVideo"
import backgroundVideo from "../../../images/fan-video.mp4"

const Intro = () => {
  const title =
    "We are happy when you are happy. Here’s what some people have said…"
  const paraContent =
    "We guarantee all of our work. We are a referral business, so our success depends on your satisfaction. All warranty is in accordance with specifications as outlines by manufacturers."
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
