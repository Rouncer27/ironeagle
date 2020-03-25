import React, { useEffect, useState } from "react"
import styled from "styled-components"

const PopupSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 999999999;
  transition: all 0.3 ease;
  opacity: ${props => (props.isActive ? 1 : 0)};
  visibility: ${props => (props.isActive ? "visable" : "hidden")};

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70rem;
    padding: 4rem;
    margin: auto;
    background-color: rgba(255, 255, 255, 1);
    border: 1.5rem solid #ffe05d;
    transform: translate(-50%, -50%);

    h2 {
      color: ${props => props.theme.colorPrim};
      font-family: ${props => props.theme.fontSec};
      font-weight: 700;
      font-size: 2.2rem;
      line-height: 1.14;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3.2rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 3.6rem;
      }

      @media (min-width: ${props => props.theme.bpDeskmd}) {
        font-size: 4rem;
      }
    }

    &__content {
      p {
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontPrim};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.56;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDeskmd}) {
          font-size: 1.6rem;
        }
      }
    }

    &__button {
      button {
        display: inline-block;
        padding: 1rem 3rem;
        color: #fff;
        background: #00adef;
        border: 0.1rem solid #01354b;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
          color: #000;
          background: #ffe05d;
        }
      }
    }
  }
`

const Popup = () => {
  const [isActive, toggleActive] = useState(false)

  useEffect(() => {
    const alreadyClickClose = localStorage.getItem("popupWarn")
    if (alreadyClickClose) return
    setTimeout(() => {
      toggleActive(true)
    }, 1000)
  }, [])

  return (
    <PopupSection isActive={isActive} id="popupWarning">
      <div className="container">
        <div>
          <h2>Important COVID-19 notice</h2>
          <div className="container__content">
            <p>
              The importance and well-being of our employees and customers is
              our top priority. No outside visitors are permitted in our
              facility at this time.
            </p>
            <p>
              Please call ahead (403-948-1333) and we will discuss with you how
              to best handle your inquiry.
            </p>
            <p>Our hours of operation have not changed.</p>
          </div>
          <div className="container__button">
            <button
              onClick={() => {
                toggleActive(false)
                localStorage.setItem("popupWarn", true)
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </PopupSection>
  )
}

export default Popup
