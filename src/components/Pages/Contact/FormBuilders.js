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

const FormStyled = styled.form`
  width: 100%;
  padding: 0 0 4rem;

  .form-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
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
          <FormFieldContainerFull>
            <FormLabels htmlFor="buildName">Your Name</FormLabels>
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
      </FormStyled>
    )
  }
}
