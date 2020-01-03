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

  img {
    height: 32px;
    opacity: 0.75;
    filter: grayscale(1);
    transition: all 0.2s ease-out;

    &:hover {
      filter: none;
      opacity: 1;
    }
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
          <GatsbyLink to="/">
            <img src="/logo-horizontal.svg" alt="Logo Octosign" />
          </GatsbyLink>
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
