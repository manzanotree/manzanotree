import * as React from 'react'
import Layout from '../components/layout'
import Home from '../components/home'

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home">
        <Home />
      </Layout>
    </div>
  )
}

export default IndexPage