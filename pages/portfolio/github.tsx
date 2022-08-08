import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Github: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Page</title>
        <meta name="About Page" content="About Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          All my public Projects on Github:
        </h3>

      </main>


    </div>
  )
}

export default Github
