import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Portfolio Page</title>
        <meta name="Landing Page" content="Landing Page" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My portfolio Page
        </h1>

        <p className={styles.description}>
          Awsome Right?
        </p>

      </main>


    </div>
  )
}

export default Home
