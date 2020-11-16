import React from 'react'
import Head from 'next/head'
import styles from './sitewide.module.css'

type SitewideProps = {
  children: React.ReactNode
}

const Sitewide = ({ children }: SitewideProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="" />
      </Head>

      <main>{children}</main>

      <footer className={styles.footer}>
        <p>Star wars Copyright @ 2020 by Nuria Martin</p>
      </footer>
    </div>
  )
}

export default Sitewide
