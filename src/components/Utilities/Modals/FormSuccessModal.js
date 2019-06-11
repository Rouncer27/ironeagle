import React from "react"
import styled from "styled-components"

import { resetTheFormMain } from "../FormFunctions"
import { UnderlineButton } from "../../styles/Commons/Buttons"

const FormSuccessModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;

  .form-send-modal--container {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 50rem;
    padding: 7.5rem;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.white};
    text-align: center;
    z-index: 5;

    p {
      font-weight: bold;
    }
  }

  .form-close-btn {
    button {
      padding: 1rem 4rem 0;
      color: ${props => props.theme.colorPrim};

      &::after {
        background: ${props => props.theme.colorPrim};
      }

      &:hover {
        color: ${props => props.theme.colorTert};

        &::after {
          background: ${props => props.theme.colorTert};
        }
      }
    }
  }

  .form-send-modal--background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colorPrim};
    opacity: 0.75;
    z-index: 1;
  }
`

const FormSuccessModal = ({ formSetState }) => {
  return (
    <FormSuccessModalStyled onClick={() => resetTheFormMain(formSetState)}>
      <div className="form-send-modal--container">
        <p>Success! Your Form Have Been Sent.</p>
        <UnderlineButton className="form-close-btn">
          <button onClick={() => resetTheFormMain(formSetState)}>Close</button>
        </UnderlineButton>
      </div>
      <div className="form-send-modal--background" />
    </FormSuccessModalStyled>
  )
}

export default FormSuccessModal
