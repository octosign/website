import React, { FC } from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { parseISO, format } from 'date-fns';

import SEO from "../components/seo"
import styled from "styled-components"
import release from "../release.json"

const releaseDate = format(parseISO(release.date), 'P');
const releasesBase = 'https://releases-proxy.octosign.com'
const windowsLink = `${releasesBase}/Octosign-Setup-${release.version}.exe`
const linuxLink = `${releasesBase}/Octosign-${release.version}.AppImage`
const linuxDebLink = `${releasesBase}/com.octosign_${release.version}_amd64.deb`
const macLink = `${releasesBase}/Octosign-${release.version}.dmg`

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

const PlatformInfo = styled(Typography)`
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
        <Button href={windowsLink} variant="outlined" color="secondary">Windows</Button>
      </PlatformItem>

      <PlatformItem item xs={6} sm={3}>
        <PlatformIcon src="/os/linux.svg" />
        <Button href={linuxLink} variant="outlined" color="secondary">Linux AppImage</Button>
        <Button href={linuxDebLink} variant="text" color="secondary">Linux .deb</Button>
      </PlatformItem>

      <PlatformItem item xs={6} sm={3}>
        <PlatformIcon src="/os/apple.svg" />
        <Button href={macLink} variant="outlined" color="secondary">Mac</Button>
      </PlatformItem>
    </Grid>

    <PlatformInfo>Version {release.version} released on {releaseDate}. All releases are 64-bit.</PlatformInfo>
  </Container>
)

export default DownloadPage
