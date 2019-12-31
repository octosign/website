import React, { FC } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import Link from "./link"

const Title = styled.div`
  flex-grow: 1;

  h1 {
    display: inline-block;
  }
`

const Nav = styled.nav`
  > a {
    margin: 0 1rem;
  }
`

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <AppBar position="sticky" color="inherit" elevation={0}>
    <Container maxWidth="lg">
      <Toolbar>
        <Title>
          <Link to="/">
            <Typography variant="h6" component="h1" color="inherit" noWrap>
              {siteTitle}
            </Typography>
          </Link>
        </Title>
        <Nav>
          <Link variant="button" color="textPrimary" to="/">
            Home
          </Link>
          <Link variant="button" color="textPrimary" to="/features">
            Features
          </Link>
          <Link variant="button" color="textPrimary" to="/resources">
            Resources
          </Link>
          <Link variant="button" color="textPrimary" to="/help">
            Help
          </Link>
        </Nav>

        <Button color="secondary" variant="outlined" component={GatsbyLink} to="/download">
          Download
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
)

export default Header
