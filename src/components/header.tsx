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
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
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
}> = ({ currentPath, currentLanguage }) => {
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleLangMenuClick = useCallback(event => {
    setLangAnchorEl(event.currentTarget)
  }, [])

  const [toggleAnchorEl, setToggleAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleToggleMenuClick = useCallback(event => {
    setToggleAnchorEl(event.currentTarget)
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

      setLangAnchorEl(null)
    },
    [currentLanguage, currentPath]
  )

  const links = currentLanguage === 'sk' ? {
    home: {
      to: '/sk',
      label: 'Domov',
    },
    resources: {
      to: '/sk/resources',
      label: 'Informácie',
    },
    help: {
      to: '/sk/help',
      label: 'Pomoc',
    },
    download: {
      to: '/sk/download',
      label: 'Stiahnuť',
    },
  } : {
    home: {
      to: '/',
      label: 'Home',
    },
    resources: {
      to: '/resources',
      label: 'Information',
    },
    help: {
      to: '/help',
      label: 'Help',
    },
    download: {
      to: '/download',
      label: 'Download',
    },
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Title>
            <GatsbyLink to={links.home.to}>
              <img src="/logo-horizontal.svg" alt="Logo Octosign" />
            </GatsbyLink>
          </Title>

          {/* Desktop menu */}
          <Box
            display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
            alignItems="center"
          >
            <Nav>
              <Link
                variant="button"
                color="textPrimary"
                to={links.home.to}
              >{links.home.label}</Link>
              <Link
                variant="button"
                color="textPrimary"
                to={links.resources.to}
              >{links.resources.label}</Link>
              <Link
                variant="button"
                color="textPrimary"
                to={links.help.to}
              >{links.help.label}</Link>
            </Nav>

            <Button
              color="secondary"
              variant="outlined"
              component={GatsbyLink}
              to={links.download.to}
            >{links.download.label}</Button>
          </Box>

          <Button
            aria-controls="language-chooser"
            aria-haspopup="true"
            onClick={handleLangMenuClick}
          >
            {currentLanguage.toUpperCase()} <ExpandMore />
          </Button>
          <Menu
            id="language-chooser"
            anchorEl={langAnchorEl}
            keepMounted
            open={Boolean(langAnchorEl)}
            onClose={() => handleChangeLanguage()}
          >
            <MenuItem onClick={() => handleChangeLanguage("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleChangeLanguage("sk")}>
              Slovenčina
            </MenuItem>
          </Menu>

          {/* Mobile menu */}
          <Hidden mdUp implementation="css">
            <IconButton
              aria-label="menu"
              aria-controls="menu-toggle"
              aria-haspopup="true"
              onClick={handleToggleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-toggle"
              anchorEl={toggleAnchorEl}
              keepMounted
              open={Boolean(toggleAnchorEl)}
              onClose={() => setToggleAnchorEl(null)}
            >
              <MenuItem component={GatsbyLink} to={links.home.to}>
                {links.home.label}
              </MenuItem>
              <MenuItem component={GatsbyLink} to={links.resources.to}>
                {links.resources.label}
              </MenuItem>
              <MenuItem component={GatsbyLink} to={links.help.to}>
                {links.help.label}
              </MenuItem>
            </Menu>
          </Hidden>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
