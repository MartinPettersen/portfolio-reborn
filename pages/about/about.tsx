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
          If you are looking for something
        </h3>
        <p className={styles.description}>
          This website was created with the following technologies:
          NextJs, React, css, TypeScript, Eslint,  
        </p>

        <p className={styles.description}>
          Not sure where to go? Try the portfolio page.
        </p>
        <p className={styles.description}>
          If you couldn`&apos;`t find what you where looking for there.
          then try the github page.
        </p>
        <p className={styles.description}>
          Someday i might actualy start writing something in the blogg page.
        </p>
      </main>


    </div>
  )
}

export default About
