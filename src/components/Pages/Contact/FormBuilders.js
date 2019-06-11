import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import {
  FormFieldContainerFull,
  FormLabels,
  InputField,
  InputTextArea,
} from "../../styles/Commons/FormFeilds"

import { UnderlineButton } from "../../styles/Commons/Buttons"
import { formHasErrors, formSentSuccess } from "../../Utilities/FormFunctions"
import FormSuccessModal from "../../Utilities/Modals/FormSuccessModal"
import FormSendingModal from "../../Utilities/Modals/FormSendingModal"
import FormErrorModal from "../../Utilities/Modals/FormErrorModal"

const FormStyled = styled.div`
  width: 100%;
  padding: 0 0 4rem;

  .form-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .form-error-message {
      position: absolute;
      top: 1rem;
      left: 0;
      width: 100%;
      margin: 0;
      color: red;
      font-size: 1.2rem;
    }
  }

  .build-form-button {
    button {
      color: ${props => props.theme.black};

      &::after {
        background: ${props => props.theme.colorPrim};
      }

      &:hover {
        color: ${props => props.theme.colorSec};
        &::after {
          background: ${props => props.theme.colorSec};
        }
      }
    }
  }
`

export default class FormBuilders extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.submitTheForm = this.submitTheForm.bind(this)

    this.state = {
      submitting: false,
      formHasErrors: false,
      formSent: false,
      errors: [],
      buildName: "",
      buildEmail: "",
      buildPhone: "",
      buildDetails: "",
    }
  }

  submitTheForm(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting,
      }
    })
    const bodyFormData = new FormData()
    bodyFormData.append("buildName", this.state.buildName)
    bodyFormData.append("buildEmail", this.state.buildEmail)
    bodyFormData.append("buildPhone", this.state.buildPhone)
    bodyFormData.append("buildDetails", this.state.buildDetails)

    const baseURL = "https://dedi105.canspace.ca/~ironeagleswbcrea/database"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/80/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            formSentSuccess(this.setState.bind(this))
            // this.formSentSuccess(res.data.message)
          }, 1000)
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            formHasErrors(this.setState.bind(this), res.data.invalidFields)
            // this.formHaveErrors(res.data.message, res.data.invalidFields)
          }, 1000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    let builderNameError = false
    let builderEmailError = false
    let buildPhoneError = false
    let builderDetailsError = false

    this.state.errors.forEach(error => {
      if (error.idref === "buildName") {
        builderNameError = "Full Name is required"
      } else if (error.idref === "buildEmail") {
        builderEmailError = "email is required"
      } else if (error.idref === "buildPhone") {
        buildPhoneError = "Phone number is required"
      } else if (error.idref === "buildDetails") {
        builderDetailsError = "Your Question / Details is Required"
      }
    })
    return (
      <FormStyled>
        <form onSubmit={this.submitTheForm} className="form-contact">
          <FormFieldContainerFull>
            <FormLabels htmlFor="buildName">Your Name</FormLabels>
            {builderNameError && (
              <p className="form-error-message">{builderNameError}</p>
            )}
            <InputField
              id="buildName"
              name="buildName"
              type="text"
              value={this.state.buildName}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="buildEmail">Your Email</FormLabels>
            {builderEmailError && (
              <p className="form-error-message">{builderEmailError}</p>
            )}
            <InputField
              id="buildEmail"
              name="buildEmail"
              type="email"
              value={this.state.buildEmail}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="buildPhone">Your Phone Number</FormLabels>
            {buildPhoneError && (
              <p className="form-error-message">{buildPhoneError}</p>
            )}
            <InputField
              id="buildPhone"
              name="buildPhone"
              type="text"
              value={this.state.buildPhone}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="buildDetails">Question / Details</FormLabels>
            {builderDetailsError && (
              <p className="form-error-message">{builderDetailsError}</p>
            )}
            <InputTextArea
              cols="40"
              rows="4"
              id="buildDetails"
              name="buildDetails"
              value={this.state.buildDetails}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>
          <UnderlineButton className="build-form-button">
            <button>Submit</button>
          </UnderlineButton>
        </form>
        {this.state.formSent && (
          <FormSuccessModal
            formType="builders"
            formSetState={this.setState.bind(this)}
          />
        )}
        {this.state.submitting && <FormSendingModal />}
        {this.state.formHasErrors && (
          <FormErrorModal formSetState={this.setState.bind(this)} />
        )}
      </FormStyled>
    )
  }
}
