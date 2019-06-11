import React from "react"
import styled from "styled-components"

import { dismissError } from "../FormFunctions"
import { UnderlineButton } from "../../styles/Commons/Buttons"

const FormErrorsModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;

  .form-error-modal__message {
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

  .form-error-modal__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.strongred};
    opacity: 0.75;
    z-index: 1;
  }

  .form-error-close-btn {
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
`

const FormErrorModal = ({ formSetState }) => {
  return (
    <FormErrorsModalStyled
      onClick={() => dismissError(formSetState)}
      className="form-error-modal"
    >
      <div className="form-error-modal__message">
        <p>
          Your Form Has Errors. Please fix the required fields to submit form.
        </p>
        <UnderlineButton>
          <button
            className="form-error-close-btn"
            onClick={() => dismissError(formSetState)}
          >
            dismiss
          </button>
        </UnderlineButton>
      </div>
      <div className="form-error-modal__background" />
    </FormErrorsModalStyled>
  )
}

export default FormErrorModal
