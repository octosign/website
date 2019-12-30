import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider as MuiThemeProvider, CssBaseline, Container } from "@material-ui/core"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import theme from "../theme"
import Header from "../components/header"
import Footer from "../components/footer"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${p => p.theme.palette.background.paper};
  }
`

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />

          <Container>{children}</Container>

          <Footer />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default Layout
