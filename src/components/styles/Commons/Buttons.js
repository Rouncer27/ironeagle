import styled from "styled-components"

const UnderlineLinks = styled.div`
  a {
    display: inline-block;
    position: relative;
    padding: 1rem 0 0;
    transition: all 0.3s ease;
    color: #363636;
    font-family: ${props => props.theme.fontPrim};
    font-size: 2.4rem;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      font-size: 2.2rem;
    }

    &::after {
      display: block;
      position: absolute;
      right: 0;
      bottom: -1rem;
      left: 0;
      width: 15rem;
      height: 1rem;
      margin: 0 auto;
      transition: all 0.3s ease;
      background: ${props => props.theme.colorPrim};
      content: "";
    }

    &:hover {
      color: ${props => props.theme.colorSec};
      &::after {
        background: ${props => props.theme.colorSec};
      }
    }
  }
`

export { UnderlineLinks }
