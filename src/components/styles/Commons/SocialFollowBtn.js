import React from "react"
import styled from "styled-components"

const SFBStyled = styled.div`
  width: 100%;
  .follow-us-text {
    margin: 0;
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    li {
      display: inline-block;
      justify-content: center;
      margin-bottom: 0.5rem;
      text-align: center;
      overflow: hidden;
      font-size: 0;

      a {
        display: block;
        position: relative;
        align-self: center;
        width: 3rem;
        height: 3rem;
        margin: 0 0.5rem;
        transition: all 0.35s ease;
        color: ${props => props.theme.colorPrim};
        font-family: ${props => props.theme.fontAwesome} !important;

        &:hover {
          color: ${props => props.theme.colorSec};
        }

        &::before {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: 0 auto;
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
        }
      }
    }

    .intro-social__list--fb a {
      &::before {
        content: "\f09a";
      }
    }
  }
`

const SocialFollowButtons = () => {
  return (
    <SFBStyled>
      <p className="follow-us-text">Follow us</p>
      <ul className="intro-social__list">
        <li className="intro-social__list--item intro-social__list--fb">
          <a
            rel="noopener noreferrer"
            title="Follow us on Facebook"
            target="_blank"
            href="https://www.facebook.com/Ironeaglesheetmetal/"
          >
            Facebook
          </a>
        </li>
      </ul>
    </SFBStyled>
  )
}

export default SocialFollowButtons
