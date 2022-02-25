import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'


const Layout = ({children, title, description, keywords}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Nav />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
