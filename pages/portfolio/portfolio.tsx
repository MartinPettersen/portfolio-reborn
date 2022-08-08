import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Portfolio: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Page</title>
        <meta name="About Page" content="About Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Selected projects:
        </h3>

        <p className={styles.description}>
          If you are looking for something specific try the github page.
        </p>
        <p className={styles.description}>
          Project One: This page
        </p>
        <p className={styles.description}>
          project Two;
        </p>
      </main>


    </div>
  )
}

export default Portfolio
