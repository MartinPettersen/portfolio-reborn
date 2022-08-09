import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectCard from '../../components/ProjectCard';

interface IProject {
  slug: string;
  projectData: {
    [key: string]: any;
  };
  content: string;
}
interface IProjects {
  projects: IProject[];
}

export async function getStaticProps() {
  const projectFiles = fs.readdirSync(path.join("projects/selectedProjects"));

  const projectPosts = projectFiles.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdown = fs.readFileSync(
      path.join("projects/selectedProjects", filename),
      "utf-8"
    );

    const { data: projectData, content } = matter(markdown);
    return {
      slug,
      projectData,
      content,
    };
  });

  return {
    props: {
      projects: projectPosts,
    },
  };
}

const Portfolio: NextPage<IProjects> = ({ projects }) => {


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

        <div className="blogContainer">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      <p className={styles.description}>
          If you are looking for something specific try the github page.
        </p>
      </main>
    </div>
  )
}

export default Portfolio
