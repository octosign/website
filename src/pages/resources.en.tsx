import React, { FC } from "react"
import { Typography, Box, Grid } from "@material-ui/core"

import SEO from "../components/seo"
import { HelpCard } from "./help.en"

const ResourcesPage: FC = () => (
  <>
    <SEO title="General information about electronic signatures" />

    <Box m={3} mt={4}>
      <Typography variant="h4" component="h1">
        General information about electronic signatures
      </Typography>

      <Box mt={4}>
        <Grid container spacing={3} direction="row">
          <Grid item sm={6} md={4}>
            <HelpCard
              title="European Union law"
              image="eu-flag.jpg"
              link="/resources/eu-law"
            >
              European Union Law regarding the electronic signatures.
            </HelpCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
)

export default ResourcesPage
