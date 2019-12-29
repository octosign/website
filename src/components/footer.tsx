import React, { FC } from "react"
import {
  Typography,
  Container as MuiContainer,
  Grid,
  Box,
} from "@material-ui/core"
import styled from "styled-components"

import Link from "./link"

const Container = styled(MuiContainer)`
  border-top: 1px solid ${p => { console.log(p.theme); return p.theme.palette.divider;}};
  margin-top: ${p => p.theme.spacing(8)};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  ${p => p.theme.breakpoints.up("sm")} {
    padding-top: ${p => p.theme.spacing(6)};
    padding-bottom: ${p => p.theme.spacing(6)};
  }
`

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
]

const Footer: FC = () => (
  <Container maxWidth="md" component="footer">
    <Grid container spacing={4} justify="space-evenly">
      {footers.map(footer => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map(item => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Box mt={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://duras.me/">
          Jakub Duras
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  </Container>
)

export default Footer
