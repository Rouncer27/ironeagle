import styled from "styled-components"

const FormFieldContainerHalf = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 4rem);
    margin: 0 2rem;
  }
`

const FormFieldContainerFull = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 100%;
    margin: 0 2rem;
  }
`

const FormLabels = styled.label`
  display: block;
  width: 100%;
  margin-top: 2rem;
  color: ${props => props.theme.black};

  @media (min-width: ${props => props.theme.bpTablet}) {
    font-size: 1.2rem;
  }
`

const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 2rem 1rem;
  border: solid 0.1rem #cccccc;
  border-radius: 0.3rem;
  color: ${props => props.theme.black};
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 1rem;
    font-size: 2rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colorSec};
  }
`

const InputTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 1rem;
  border: solid 0.1rem #cccccc;
  border-radius: 0.3rem;
  color: ${props => props.theme.black};
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 1rem;
    font-size: 2rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colorSec};
  }
`

const SelectDropdown = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding-top: 1rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }

  label {
    display: block;
    width: 100%;
    color: ${props => props.theme.colorTert};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.2rem;
    }
  }

  .select-container {
    position: relative;
    background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
    height: 29px;
    overflow: hidden;
    width: 240px;
    border-radius: 0;
    background-color: ${props => props.theme.colorTert};
  }

  select {
    background: transparent;
    border: none;
    font-size: 14px;
    height: 29px;
    padding: 5px;
    width: 268px;
    color: #fff;
  }
`

export {
  FormFieldContainerHalf,
  FormFieldContainerFull,
  FormLabels,
  InputField,
  InputTextArea,
  SelectDropdown,
}
