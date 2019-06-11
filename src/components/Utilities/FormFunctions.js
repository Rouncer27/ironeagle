const formSentSuccess = setState => {
  setState(prevState => {
    return {
      ...prevState,
      formSent: true,
      submitting: false,
    }
  })
}

const formHasErrors = (setState, fields) => {
  setState(prevState => {
    return {
      ...prevState,
      submitting: false,
      formHasErrors: true,
      errors: fields,
    }
  })
}

const dismissError = setState => {
  setState(prevState => {
    return {
      ...prevState,
      formHasErrors: false,
    }
  })
}

const resetTheFormMain = setState => {
  setState(prevState => {
    return {
      ...prevState,
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
  })
}

export { formSentSuccess, formHasErrors, dismissError, resetTheFormMain }
