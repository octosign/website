import React, { FC } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Grid, Typography, Button, Box } from "@material-ui/core"

import SEO from "../components/seo"
import Image from "../components/image"

export const Intro = styled(Grid)`
  padding: ${p => p.theme.spacing(2)} 0;

  display: flex;
  align-items: center;
`

export const Screenshot = styled.div`
  background: #ffffff url("bg-illustration.svg") no-repeat center right/contain;
  padding: ${p => p.theme.spacing(4)};

  .screenshot {
    width: 85%;
    border-radius: ${p => p.theme.shape.borderRadius}px;
  }
`

const IndexPage: FC = () => (
  <>
    <SEO title="Home" />

    <Intro container spacing={4} justify="space-evenly">
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" component="h1">Electronic signatures</Typography>
        <Typography variant="subtitle1">
          Sign your documents (like PDFs) using electronic signatures for free
          on your computer.
        </Typography>

        <Box mt={1}>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/download"
          >
            Download
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Screenshot>
          <Image
            className="screenshot"
            path="screenshot.jpg"
            alt="Screenshot of the application"
          />
        </Screenshot>
      </Grid>
    </Intro>

    {/* TODO: Use cryptography as signature */}

    {/* TODO: Use image or draw your signature */}

    {/* TODO: Want to know more about the electronic signatures? */}

    {/* TODO: Call to action: Download */}
  </>
)

export default IndexPage
