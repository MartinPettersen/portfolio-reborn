import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SkillCard from "../../components/SkillCard";
import styles from "../../styles/AboutMe.module.css";

const AboutMe: NextPage = () => {

  const general: string[] = ["JavaScript"];
  const backend: string[] = ["NodeJS", "ExpressJS", "REST", "GraphQL", "MongoDB", "PostgreSQL"
  ,"Firebase","Firestore"];
  const frontend: string[] = ["React", "Redux", "Webpack", "React Native", "CSS/SASS/styled-components",
  "Next.js"];
  const toolsAndTech: string[] = ["Visual Studio Code", "Sublime", "Handlebars/Mustache", "Mocha/Jest", "Docker",
    "Git+GitHub", "GitHub Actions", "AWS", "Cloud Platforms (MongoDB Atlas,ElephantSQL, Netlify, Heroku, Contentful, Vercel)", "TDD", "Agile work methods"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Me Page</title>
        <meta name="About Me Page" content="About Me Page" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Tech</h3>

        <div className={styles.educationContainer}>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>General</p>
              <div className={styles.text}>
              <SkillCard skills={general} />
              
              </div>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>Backend</p>
              <p className={styles.text}>
                <SkillCard skills={backend} />
              </p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>Frontend</p>
              <p className={styles.text}>
              <SkillCard skills={frontend} />

              </p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <p className={styles.heading}>Tools and technologies</p>
              <p className={styles.text}>
              <SkillCard skills={toolsAndTech} />

              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
