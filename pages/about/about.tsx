import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AboutMe.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Me Page</title>
        <meta name="About Me Page" content="About Me Page" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Martin Pettersen</h3>

        <div className={styles.educationContainer}>
          <p className={styles.description}>
            I have 2 bachelor’s one in Informatics: Programming and Networks
            (Informatikk: Programmering og nettverk) and one in Multimedia
            technology and design (Multimedieteknologi og design).
          </p>
          <h1 className={styles.header}>Education:</h1>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>
                Bachelor in Informatics: Programming and Networks(120sp)
                University of Oslo
              </p>
              <p className={styles.text}>2014 - 2018</p>
              <p className={styles.text}>
                Programming and data communication. Programmering of machines.
                Create systems, programs and applications. Develop computer
                systems, program systems and algorithms.Understanding how
                software and operating systems work.
              </p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>
                Bachelor in Multimedia technology and design(120sp) University
                of Agder, Grimstad
              </p>
              <p className={styles.text}>2010 - 2013</p>
              <p className={styles.text}>
                Theoretical and practical foundation in technology and
                multimedia. Such as graphic design,, 3D-visualization and
                animation, video and audio production, image processing,
                webdesign and interactive media design.
              </p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>
                Informatics individual courses | University of Oslo
              </p>
              <p className={styles.text}>2018 - 2019</p>
              <p className={styles.text}>singular informatics courses</p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>
                Full Stack JavaScript - School of Applied Technology {"</salt>"}
              </p>
              <p className={styles.text}>2022</p>
              <p className={styles.text}>
                Intensive three month training program for full stack web
                development with a focus on TDD, mob programming, and applied
                learning.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default About;
