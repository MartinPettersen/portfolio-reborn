import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const About: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Page</title>
        <meta name="About Page" content="About Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to my Portfolio page
        </h3>
        <p className={styles.description}>
          This website was created with the following technologies:
          NextJs, React, css, TypeScript, Eslint,  
        </p>
      </main>


    </div>
  )
}

export default About
