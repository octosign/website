import React, { FC } from "react"
import { Typography, Box, Grid } from "@material-ui/core"

import SEO from "../components/seo"
import { HelpCard } from "./help.en"

const HelpPage: FC = () => (
  <>
    <SEO title="Pomoc" />

    <Box m={3} mt={4}>
      <Typography variant="h4" component="h1">
        Pomoc
      </Typography>

      <Box mt={4}>
        <Grid container spacing={3} direction="row">
          <Grid item sm={6} md={4}>
            <HelpCard
              title="Základné použitie"
              image="screenshot.jpg"
              link="/sk/help/basics"
            >
              Základné informácie ako používať aplikáciu.
            </HelpCard>
          </Grid>

          <Grid item sm={6} md={4}>
            <HelpCard
              title="Často kladené otázky"
              image="screenshot.jpg"
              link="/sk/help/faq"
            >
              Otázky ohľadom použitia a vlastností aplikácie.
            </HelpCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
)

export default HelpPage
