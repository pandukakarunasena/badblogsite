import React from 'react'
import Layout from '../components/layout'
import {Link } from 'gatsby'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title = 'page not found' />
            <h1> 💩💩 Page not Found Bitch!!! 💩💩   </h1>
            <Link to = '/'>🤦Go back to home Bitch 🤦 </Link>
        </Layout>
    )
}

export default NotFound