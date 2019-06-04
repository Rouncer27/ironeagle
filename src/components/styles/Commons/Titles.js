import styled from "styled-components"

const TinyH2Title = styled.h2`
  margin-bottom: 1rem;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.25;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    font-size: 1.8rem;
  }
`

export { TinyH2Title }
