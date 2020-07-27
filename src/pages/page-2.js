import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import S3 from "../components/s3"
import Codepipline from "../components/codepipeline"
import Codebuild from "../components/codebuild"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="AWS Services" />
    <h1>AWS Services</h1>
     <div style={{ display: `grid`, gridTemplateColumns: `repeat(3, 1fr)`, marginBottom: `1.45rem` }}>
      <S3 />
      <Codepipline />
      <Codebuild />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
