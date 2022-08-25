import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ProjectCard.module.css";
import type { NextPage } from "next";
import { marked } from "marked";
import Link from "next/link";

interface IProject {
  slug: string;
  projectData: {
    [key: string]: any;
    title: string;
    description: string;
    githublink: string;
    hostlink: string;
    tech: Array<string>;
  };
  content: string;
}

const ProjectCard = (props: { project: IProject }) => {
  const { project } = props;
  return (
    <div className={styles.card}>
      <h2>{project.projectData.title}</h2>
      <h3>{project.projectData.description}</h3>
      <Link href={project.projectData.githublink}>
        <a className={styles.linkButton}>Github link</a>
      </Link>
      {project.projectData.hostlink !== "none" ? (
        <Link href={project.projectData.hostlink}>
          <a className={styles.linkButton}>Host link</a>
        </Link>
      ) : (
        <></>
      )}
      <div className={styles.container}>
        <p>Tech used: &#8192;</p>
        {project.projectData.tech.map((tech: string, index: any) => {
          return (
            <p className={styles.techItem} key={index}>
              &#8192;{tech},
            </p>
          );
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked(project.content) }}></div>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
