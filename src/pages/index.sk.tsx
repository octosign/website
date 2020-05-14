import React, { FC } from "react"
import { Link } from "gatsby"
import { Grid, Typography, Button, Box } from "@material-ui/core"

import SEO from "../components/seo"
import Image from "../components/image"
import { Intro, Screenshot } from "./index.en"

const IndexPage: FC = () => (
  <>
    <SEO title="Domov" />

    <Intro container spacing={4} justify="space-evenly">
      <Grid item xs={12} sm={4}>
        <Typography variant="h4">Elektronické podpisy</Typography>
        <Typography variant="subtitle1">
          Podpíšte svoje dokumenty (napríklad PDF) elektronickým podpisom
          zadarmo na vašom počítači.
        </Typography>

        <Box mt={1}>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/sk/download"
          >
            Stiahnuť
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Screenshot>
          <Image
            className="screenshot"
            path="screenshot.jpg"
            alt="Snímka obrazovky aplikácie"
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
