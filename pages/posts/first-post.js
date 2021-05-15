import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout.js'

export default function FirstPost(){
    return ( 
        <Layout>
        <Head>
            <title>Primeiro Post</title>
        </Head>
            <h1>Primeiro Post!</h1> 
            <Link href="/"><a href="">Back to home</a></Link>
        </Layout>
)}
