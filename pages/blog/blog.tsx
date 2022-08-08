import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Blog: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Blog</title>
        <meta name="Blog Page" content="Blog Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          One day something will be written here:
        </h3>

      </main>


    </div>
  )
}

export default Blog
