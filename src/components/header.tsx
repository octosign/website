import React, { FC } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core"
import styled from "styled-components"

import Link from "./link"

const Title = styled(Typography)`
  flex-grow: 1;
`

const Nav = styled.nav`
  > a {
    margin: 0 1rem;
  }
`

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <Container maxWidth="lg">
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar>
        <Title variant="h6" componet="h1" color="inherit" noWrap>
          {siteTitle}
        </Title>
        <Nav>
          <Link variant="button" color="textPrimary" href="#">
            Features
          </Link>
          <Link variant="button" color="textPrimary" href="#">
            Enterprise
          </Link>
          <Link variant="button" color="textPrimary" href="#">
            Support
          </Link>
        </Nav>
        <Button href="#" color="primary" variant="outlined">
          Download
        </Button>
      </Toolbar>
    </AppBar>
  </Container>
)

export default Header
