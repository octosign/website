import React, { FC, useCallback } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Menu,
  MenuItem,
} from "@material-ui/core"
import ExpandMore from "@material-ui/icons/ExpandMore"
import styled from "styled-components"
import { Link as GatsbyLink, navigate } from "gatsby"

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

const Header: FC<{
  siteTitle: string
  currentPath: string
  currentLanguage: string
}> = ({ siteTitle, currentPath, currentLanguage }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleMenuClick = useCallback(event => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleChangeLanguage = useCallback(
    (language?: string) => {
      if (language && language !== currentLanguage) {
        if (language === "en") {
          navigate(currentPath.replace(`/${currentLanguage}`, ``))
        } else {
          navigate(
            currentPath.replace(
              new RegExp(
                `^\/${currentLanguage === "en" ? "" : currentLanguage}`
              ),
              `/${language}${currentLanguage === "en" ? "/" : ""}`
            )
          )
        }
      }

      setAnchorEl(null)
    },
    [currentLanguage, currentPath]
  )

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Title>
            <GatsbyLink to={currentLanguage === "sk" ? "/sk" : "/"}>
              <img src="/logo-horizontal.svg" alt="Logo Octosign" />
            </GatsbyLink>
          </Title>

          <Nav>
            <Link
              variant="button"
              color="textPrimary"
              to={currentLanguage === "sk" ? "/sk" : "/"}
            >
              {currentLanguage === "sk" ? "Domov" : "Home"}
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to={currentLanguage === "sk" ? "/sk/resources" : "/resources"}
            >
              {currentLanguage === "sk" ? "Informácie" : "Information"}
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to={currentLanguage === "sk" ? "/sk/help" : "/help"}
            >
              {currentLanguage === "sk" ? "Pomoc" : "Help"}
            </Link>
          </Nav>

          <Button
            color="secondary"
            variant="outlined"
            component={GatsbyLink}
            to={currentLanguage === "sk" ? "/sk/download" : "/download"}
          >
            {currentLanguage === "sk" ? "Stiahnuť" : "Download"}
          </Button>

          <Button
            aria-controls="language-chooser"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            {currentLanguage.toUpperCase()} <ExpandMore />
          </Button>
          <Menu
            id="language-chooser"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleChangeLanguage()}
          >
            <MenuItem onClick={() => handleChangeLanguage("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleChangeLanguage("sk")}>
              Slovenčina
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
