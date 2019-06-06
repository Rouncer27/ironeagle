import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainNavSubMenuItem from "./MainNavSubMenuItem"

const MainNavItemStyled = styled.li`
  position: relative;
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

  .main-nav-sub {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 100%;
    left: -1rem;
    width: 100%;
    min-width: 17.5rem;
    margin: 0 auto;
    padding: 2rem 1rem 2rem 0;
    transition: all 0.3s ease;
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    .main-nav-sub {
      visibility: visible;
      opacity: 1;
    }
  }
`

const MainNavItem = ({ object_slug, title, location, wordpress_children }) => {
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent = currentPageSlug === location ? true : false
  return (
    <MainNavItemStyled isCurrent={isCurrent}>
      <Link to={object_slug === "home" ? "/" : `/${object_slug}`}>{title}</Link>
      {wordpress_children !== null && (
        <ul className="main-nav-sub">
          {wordpress_children.map((item, index) => {
            return (
              <MainNavSubMenuItem
                key={index}
                title={item.title}
                currentPageSlug={currentPageSlug}
                objectSlug={item.object_slug}
                location={location}
              />
            )
          })}
        </ul>
      )}
    </MainNavItemStyled>
  )
}

export default MainNavItem
