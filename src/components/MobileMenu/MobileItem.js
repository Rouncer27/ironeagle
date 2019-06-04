import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileItemStyled = styled.li`
  width: 100%;
  align-self: center;
  font-size: 2.4rem;
  text-align: center;

  a {
    display: block;
    padding: 1rem 2rem;
    background: ${props =>
      props.isCurrent ? props.theme.colorTert : "transparent"};
    border-bottom: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
    color: ${props =>
      props.isCurrent ? props.theme.white : props => props.theme.colorPrim};

    &:hover {
      color: ${props => props.theme.white};
    }
  }

  &:first-of-type a {
    border-top: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
  }
`

const MobileItem = props => {
  const { object_slug, title, location } = props
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent = currentPageSlug === location ? true : false
  return (
    <MobileItemStyled isCurrent={isCurrent}>
      <Link to={object_slug === "home" ? "/" : `/${object_slug}`}>{title}</Link>
    </MobileItemStyled>
  )
}

export default MobileItem
