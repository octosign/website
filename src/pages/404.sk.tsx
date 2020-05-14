import React, { FC } from "react"

import SEO from "../components/seo"

const NotFoundPage: FC = () => (
  <>
    <SEO title="404: Nenájdené" />
    <h1>Nenájdené</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
