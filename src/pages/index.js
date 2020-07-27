import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Gatsby.js site on amazon s3 with AWS CodePipeline</h2>
    <Link to="/page-2/">What AWS services are being used?</Link> <br />
  </Layout>
)

export default IndexPage
