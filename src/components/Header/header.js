import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import MainLogo from "./MainLogo/MainLogo"
import MainNav from "./MainNav/MainNav"
import MobileMenu from "../MobileMenu/MobileMenu"

const MainNavigationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 102rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
`

const Header = ({ siteTitle, location }) => (
  <header>
    <MainNavigationWrapper>
      <MainLogo />
      <MainNav location={location} />
    </MainNavigationWrapper>
    <MobileMenu location={location} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
