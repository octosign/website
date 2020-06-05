import React, { FC } from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { parseISO, format } from 'date-fns';

import SEO from "../components/seo"
import styled from "styled-components"
import release from "../release.json"

const releaseDate = format(parseISO(release.date), 'DD.MM.YYYY');
const releasesBase = 'https://github.com/durasj/octosign/releases/download'
const windowsLink = `${releasesBase}/v${release.version}/Octosign-Setup-${release.version}.exe`
const linuxLink = `${releasesBase}/v${release.version}/Octosign-${release.version}.AppImage`
const linuxDebLink = `${releasesBase}/v${release.version}/com.octosign_${release.version}_amd64.deb`
const macLink = `${releasesBase}/v${release.version}/Octosign-${release.version}.dmg`

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
    <SEO title="Stiahnuť" />
    <h1>Stiahnuť Octosign</h1>
    <p>Bezplatný počítačový softvér na elektronické podpisovanie.</p>

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

    <PlatformInfo>Verzia {release.version} uverejnená {releaseDate}. Všetky súbory sú 64-bit.</PlatformInfo>
  </Container>
)

export default DownloadPage
