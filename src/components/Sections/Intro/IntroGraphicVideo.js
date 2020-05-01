import React from "react"
import styled from "styled-components"
import Waves from "../../Svgs/Waves"
import SnapHome from "./SnapHome"

const IntroGraphicVideoStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 33rem;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 40%;
    padding-left: 5.5rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: 40%;
    padding-left: 5.5rem;
  }

  .waves-blue {
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .waves {
    position: relative;
    z-index: 10;
  }

  .video-background {
    position: relative;
    height: 45rem;
    width: 33rem;
    overflow: hidden;
  }

  #bg {
    width: 45rem;
    height: 25.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    z-index: 1;
  }

  svg {
    width: 33rem;
    height: 45rem;

    rect {
      position: relative;
      z-index: 10;
    }

    #maskLayer {
      position: relative;
      z-index: 5;
    }

    #CA1 {
      transform: translate(-2rem, -3rem);
    }

    #CA2 {
      transform: translate(-2rem, -3rem);
    }

    #CA3 {
      transform: translate(-2rem, -3rem);
    }
  }

  #masked {
    mask: url("#maskLayer");
  }
`

const IntroGraphicVideo = ({ video }) => {
  return (
    <IntroGraphicVideoStyled>
      <SnapHome />
      <div className="video-background">
        <div className="waves">
          <Waves />
        </div>

        <video
          id="bg"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        >
          <source src={video} />
        </video>
      </div>
    </IntroGraphicVideoStyled>
  )
}

export default IntroGraphicVideo
