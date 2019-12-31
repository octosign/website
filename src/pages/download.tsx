import React, { FC } from "react"
import { Grid, Button } from "@material-ui/core"

import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlatformItem = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-items: center;

    margin: ${p => p.theme.spacing(8)} 0;

    > * {
        margin: ${p => p.theme.spacing(1)};
    }
`

const PlatformIcon = styled.img`
    opacity: 0.75;
    margin: 0 ${p => p.theme.spacing(8)};
`

const PlatformInfo = styled.div`
    text-align: center;
`

const DownloadPage: FC = () => (
  <Container>
    <SEO title="Download" />
    <h1>Download Octosign</h1>
    <p>Free desktop electronic signature software.</p>

    <Grid container spacing={4} justify="space-evenly">
      <PlatformItem item xs={6} sm={3}>
        <PlatformIcon src="/os/windows.svg" />
        <Button variant="outlined" color="secondary">Windows</Button>
        <PlatformInfo>64-bit v0.1.0-dev 30.12.2019</PlatformInfo>
      </PlatformItem>

      <PlatformItem item xs={6} sm={3}>
        <PlatformIcon src="/os/linux.svg" />
        <Button variant="outlined" color="secondary">Linux AppImage</Button>
        <Button variant="text" color="secondary">Linux .deb</Button>
        <PlatformInfo>64-bit v0.1.0-dev 30.12.2019</PlatformInfo>
      </PlatformItem>

      <PlatformItem item xs={6} sm={3}>
        <PlatformIcon src="/os/apple.svg" />
        <Button variant="outlined" color="secondary">Mac</Button>
        <PlatformInfo>64-bit v0.1.0-dev 30.12.2019</PlatformInfo>
      </PlatformItem>
    </Grid>
  </Container>
)

export default DownloadPage
