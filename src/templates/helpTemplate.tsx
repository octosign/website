import React, { FC } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import {
  Grid,
  Typography,
  LinkProps,
  MenuList,
  MenuItem,
  Box,
  Breadcrumbs,
} from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import SEO from "../components/seo"
import Link from "../components/link"

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}
const LinkRouter = (props: LinkRouterProps) => (
  <li>
    <Link {...props} component={GatsbyLink as any} />
  </li>
)

// TODO: Add props type
const HelpTemplate: FC<{ data: any }> = ({ data, pathContext, path }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const currentLanguage = pathContext.langKey || "en"
  const currentPath = path
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { edges } = allMarkdownRemark

  const allPages = edges
    .filter(
      e =>
        e.node.frontmatter.path.includes("/help/") &&
        e.node.frontmatter.language === currentLanguage
    )
    .map(({ node }) => ({
      path: node.frontmatter.path,
      title: node.frontmatter.title,
    }))

  return (
    <>
      <SEO title={frontmatter.title} />

      <Box m={3} mt={4}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={8}>
            <article>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  color="inherit"
                  href={currentLanguage === "sk" ? "/sk" : ""}
                >
                  {currentLanguage === "sk" ? "Domov" : "Home"}
                </Link>
                <Link
                  color="inherit"
                  href={currentLanguage === "sk" ? "/sk/help" : "/help"}
                >
                  {currentLanguage === "sk" ? "Pomoc" : "Help"}
                </Link>
                <Typography color="textPrimary">{frontmatter.title}</Typography>
              </Breadcrumbs>

              <Typography variant="h4" component="h1">
                {frontmatter.title}
              </Typography>
              <Typography variant="caption">
                {currentLanguage === "sk"
                  ? "Naposledy upravené"
                  : "Last updated"}
                : {frontmatter.date}
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box mt={!isMobile && 2} ml={2}>
              <Typography variant="overline" display="block" gutterBottom>
                {currentLanguage === "sk"
                  ? "Všetky stránky s pomocou"
                  : "All help pages"}
              </Typography>
            </Box>

            <nav aria-label="help navigation">
              <MenuList>
                {allPages.map(page => (
                  <MenuItem
                    key={page.path}
                    component={LinkRouter}
                    to={page.path}
                    selected={page.path === currentPath}
                  >
                    {page.title}
                  </MenuItem>
                ))}
              </MenuList>
            </nav>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }

    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            language
          }
        }
      }
    }
  }
`

export default HelpTemplate
