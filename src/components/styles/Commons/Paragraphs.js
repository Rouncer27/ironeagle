import styled from "styled-components"

const SmallParagraphs = styled.p`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontPrim};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.56;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    font-size: 1.6rem;
  }
`

export { SmallParagraphs }
