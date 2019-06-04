import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import MainNavItem from "./MainNavItem"
import MainNavEmergency from "./MainNavEmergency"
import MainNavEmployee from "./MainNavEmployee"

const MainNavStyled = styled.nav`
  width: 100%;
  margin: 2rem auto;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(80%);
  }

  ul {
    display: none;
    @media (min-width: ${props => props.theme.bpTablet}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      justify-content: flex-end;
    }
  }
`

const MainNav = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
            items {
              wordpress_id
              title
              object_slug
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.wordpressWpApiMenusMenusItems.items
        return (
          <MainNavStyled>
            <MainNavEmergency />
            <ul>
              {menuItems.map((item, index) => {
                return <MainNavItem key={index} {...item} location={location} />
              })}
            </ul>
            <MainNavEmployee />
          </MainNavStyled>
        )
      }}
    />
  )
}

export default MainNav
