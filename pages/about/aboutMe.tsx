import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const AboutMe: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Me Page</title>
        <meta name="About Me Page" content="About Me Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome. My Name is Martin Pettersen
        </h3>

        <p className={styles.description}>
          I have two degres. One in Informatics programming and networks and another one in multimedia techologi and design
        </p>
        <p className={styles.description}>
          Currently working as a fullstack Javascript consultant for SALT 
        </p>

      </main>


    </div>
  )
}

export default AboutMe
