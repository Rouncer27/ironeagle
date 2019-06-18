import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import {
  FormFieldContainerFull,
  FormLabels,
  InputField,
  InputTextArea,
  SelectDropdown,
} from "../../styles/Commons/FormFeilds"

import { UnderlineButton } from "../../styles/Commons/Buttons"
import { formHasErrors, formSentSuccess } from "../../Utilities/FormFunctions"
import FormSuccessModal from "../../Utilities/Modals/FormSuccessModal"
import FormSendingModal from "../../Utilities/Modals/FormSendingModal"
import FormErrorModal from "../../Utilities/Modals/FormErrorModal"

const FormStyled = styled.div`
  width: 100%;
  padding: 2rem 0 4rem;

  .form-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 60rem;
      margin: 2rem auto;
    }

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
`

class Form extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.submitTheForm = this.submitTheForm.bind(this)

    this.state = {
      submitting: false,
      formHasErrors: false,
      formSent: false,
      errors: [],
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      yourDetails: "",
      issueType: "",
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
    bodyFormData.append("yourName", this.state.yourName)
    bodyFormData.append("yourEmail", this.state.yourEmail)
    bodyFormData.append("yourPhone", this.state.yourPhone)
    bodyFormData.append("yourDetails", this.state.yourDetails)
    bodyFormData.append("issueType", this.state.issueType)

    const baseURL = "https://database.ironeagle.ca"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/8/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            formSentSuccess(this.setState.bind(this))
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
    let issueTypeError = false
    let yourNameError = false
    let yourEmailError = false
    let phoneNumberError = false
    let yourDetailsError = false

    this.state.errors.forEach(error => {
      if (error.idref === "yourName") {
        yourNameError = "Full Name is required"
      } else if (error.idref === "yourEmail") {
        yourEmailError = "email is required"
      } else if (error.idref === "yourPhone") {
        phoneNumberError = "Phone number is required"
      } else if (error.idref === "yourDetails") {
        yourDetailsError = "Your Question / Details is Required"
      } else if (error.idref === "issueType") {
        issueTypeError = "Please choose one"
      }
    })
    return (
      <FormStyled>
        <form onSubmit={this.submitTheForm} className="form-contact">
          <SelectDropdown>
            <FormLabels htmlFor="issueType">Select an issue</FormLabels>
            {issueTypeError && (
              <p className="form-error-message">{issueTypeError}</p>
            )}
            <div className="select-container">
              <select
                id="issueType"
                name="issueType"
                onChange={this.onChange}
                value={this.state.issueType}
                required={false}
              >
                <option value=""> -- Select an issue -- </option>
                <option title="emergencyService" value="emergencyService">
                  Emergency Service
                </option>
                <option title="furnace" value="furnace">
                  Furnace
                </option>
                <option title="cooling" value="cooling">
                  Cooling
                </option>
                <option title="refrigeration" value="refrigeration">
                  Refrigeration
                </option>
                <option title="other" value="other">
                  Other
                </option>
              </select>
            </div>
          </SelectDropdown>

          <FormFieldContainerFull>
            <FormLabels htmlFor="yourName">Your Name</FormLabels>
            {yourNameError && (
              <p className="form-error-message">{yourNameError}</p>
            )}
            <InputField
              id="yourName"
              name="yourName"
              type="text"
              value={this.state.yourName}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="yourEmail">Your Email</FormLabels>
            {yourEmailError && (
              <p className="form-error-message">{yourEmailError}</p>
            )}
            <InputField
              id="yourEmail"
              name="yourEmail"
              type="email"
              value={this.state.yourEmail}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="yourPhone">Your Phone Number</FormLabels>
            {phoneNumberError && (
              <p className="form-error-message">{phoneNumberError}</p>
            )}
            <InputField
              id="yourPhone"
              name="yourPhone"
              type="text"
              value={this.state.yourPhone}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>

          <FormFieldContainerFull>
            <FormLabels htmlFor="yourDetails">Question / Details</FormLabels>
            {yourDetailsError && (
              <p className="form-error-message">{yourDetailsError}</p>
            )}
            <InputTextArea
              cols="40"
              rows="4"
              id="yourDetails"
              name="yourDetails"
              value={this.state.yourDetails}
              onChange={this.onChange}
              required={false}
            />
          </FormFieldContainerFull>
          <UnderlineButton>
            <button>Submit</button>
          </UnderlineButton>
        </form>
        {this.state.formSent && (
          <FormSuccessModal
            formType="main"
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

export default Form
