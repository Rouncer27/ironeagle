import styled from "styled-components"

const TinyH2Title = styled.h2`
  margin-bottom: 1rem;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.25;

  @media (min-width: ${props => props.theme.bpTablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    font-size: 1.8rem;
  }
`

const BigH2Title = styled.h2`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.14;

  @media (min-width: ${props => props.theme.bpTablet}) {
    font-size: 3.6rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 4.6rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    font-size: 5.2rem;
  }
`
const RegularH2Title = styled.h2`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.14;

  @media (min-width: ${props => props.theme.bpTablet}) {
    font-size: 3.6rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 4.4rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    font-size: 4.8rem;
  }
`

export { TinyH2Title, BigH2Title, RegularH2Title }
