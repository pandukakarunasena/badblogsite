import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title = 'home'/>
      <h1>Hello</h1> 
      <h2>This is a blog site that you can put bad things 🌴</h2>
      <h4>To gain the access contact me via facebook<a href="" target='blank'>🤝</a></h4>
    </Layout>
  )
}

export default IndexPage