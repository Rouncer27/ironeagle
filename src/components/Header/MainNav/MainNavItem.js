import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainNavItemStyled = styled.li`
  margin: 0 1rem;
  font-size: 1.4rem;

  a {
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    background: ${props =>
      props.isCurrent ? props.theme.colorPrim : "transparent"};
    color: ${props => props.theme.black};
    font-size: 1em;
    font-weight: 700;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-weight: 700;
    }

    &:hover {
      background: ${props =>
        props.isCurrent
          ? props.theme.colorPrim
          : props => props.theme.colorSec};
    }
  }
`

const MainNavItem = ({ object_slug, title, location }) => {
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent = currentPageSlug === location ? true : false
  return (
    <MainNavItemStyled isCurrent={isCurrent}>
      <Link to={object_slug === "home" ? "/" : `/${object_slug}`}>{title}</Link>
    </MainNavItemStyled>
  )
}

export default MainNavItem
