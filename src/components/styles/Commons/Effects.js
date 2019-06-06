import styled from "styled-components"

const BigBlueDoubleQuote = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  &::after {
    position: absolute;
    top: -7.5rem;
    right: 0;
    left: 0;
    width: 5.5rem;
    height: 5.5rem;
    margin: 0 auto;
    color: ${props => props.theme.colorPrim};
    font-family: ${props => props.theme.fontSec};
    font-size: 17.5rem;
    line-height: 1;
    content: "“";
  }

  @media (min-width: ${props => props.theme.bpTablet}) {
    &::after {
      top: -10rem;
      width: 6.5rem;
      height: 6.5rem;
      font-size: 20rem;
    }
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    &::after {
      top: -10rem;
      width: 7.5rem;
      height: 7.5rem;
      font-size: 25rem;
    }
  }
`

const AngleGreyBackground = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  left: -25%;
  width: 150%;
  height: 85%;
  margin: 0 auto;
  background: #f8f8f8;
  transform: rotate(-10deg);
  z-index: -1;
`

export { BigBlueDoubleQuote, AngleGreyBackground }
