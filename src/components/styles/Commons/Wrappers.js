import styled from "styled-components"

const StandardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 90rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100rem;
  }
`

const FullScreenWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 90rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 110rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    max-width: 150rem;
  }

  @media (min-width: ${props => props.theme.bpDesklg}) {
    max-width: 175rem;
  }
`

const MicroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 60rem;
  }
`

const TinyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 70rem;
  }
`

const SmallContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 75rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 85rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    max-width: 90rem;
  }
`

export {
  StandardWrapper,
  FullScreenWrapper,
  MicroContainer,
  TinyContainer,
  SmallContainer,
}
