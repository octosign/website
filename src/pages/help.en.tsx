import React, { FC } from "react"
import {
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

const NoStyleLink = styled(Link)`
  text-decoration: none;
`

export const HelpCard: FC<{
  image: string
  title: string
  link: string
}> = ({ image, title, link, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const imagePath = data.allImageSharp.edges.find(element => {
    // Match string after final slash
    return element.node.fluid.src.split("/").pop() === image
  }).node.fluid.src

  return (
    <NoStyleLink to={link}>
      <Card>
        <CardActionArea>
          <CardMedia image={imagePath} title={title} style={{ height: 120 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NoStyleLink>
  )
}

const HelpPage: FC = () => (
  <>
    <SEO title="Help" />

    <Box m={3} mt={4}>
      <Typography variant="h4" component="h1">
        Help
      </Typography>

      <Box mt={4}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={4}>
            <HelpCard
              title="Basic usage"
              image="screenshot.jpg"
              link="/help/basics"
            >
              Basic information on how to use the application.
            </HelpCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <HelpCard
              title="Frequently asked questions"
              image="screenshot.jpg"
              link="/help/faq"
            >
              Answers questions on usage and features of the application.
            </HelpCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
)

export default HelpPage
