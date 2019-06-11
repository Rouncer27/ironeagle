import React from "react"
import styled from "styled-components"
import { ClipLoader } from "react-spinners"

const FormSendingModalStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;

  .submitting-the-forms__message {
    display: block;
    align-self: center;
    max-width: 50rem;
    margin: 0 auto;
    z-index: 1500;
    text-align: center;

    p {
      color: ${props => props.theme.colorTert};
      font-size: 2rem;
      font-family: ${props => props.theme.colorSec};
    }
  }

  .submitting-the-forms__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colorSec};
    opacity: 0.8;
  }
`

const FormSendingModal = () => {
  return (
    <FormSendingModalStyled>
      <div className="submitting-the-forms__message">
        <p>Submitting your form. Please wait...</p>
        <div className="submitting-the-forms__loading">
          <ClipLoader
            sizeUnit={"px"}
            size={35}
            color={"#00adef"}
            loading={true}
          />
        </div>
      </div>

      <div className="submitting-the-forms__background" />
    </FormSendingModalStyled>
  )
}

export default FormSendingModal
