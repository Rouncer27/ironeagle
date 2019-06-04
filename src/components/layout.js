import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "./styles/Theme"
import GlobalStyle from "./styles/Golbal"

import Header from "./Header/header"
import Footer from "./Footer/Footer"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Header
              location={location ? location.pathname : "/"}
              siteTitle={data.site.siteMetadata.title}
            />
            <div>
              <main>{children}</main>
            </div>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
