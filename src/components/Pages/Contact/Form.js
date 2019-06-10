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

const FormStyled = styled.form`
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

    const baseURL = "https://dedi105.canspace.ca/~ironeagleswbcrea/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/548/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            console.log(res.data.message)
            // this.formSentSuccess(res.data.message)
          }, 1000)
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            console.log(res.data.message)
            console.log(res.data.invalidFields)
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
    return (
      <FormStyled>
        <form onSubmit={this.submitTheForm} className="form-contact">
          <SelectDropdown>
            <FormLabels htmlFor="issueType">Select an issue</FormLabels>
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
      </FormStyled>
    )
  }
}

export default Form
