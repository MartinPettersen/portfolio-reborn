import React from 'react'
import PropTypes from 'prop-types'
import styles from "../styles/blog.module.css";
import type { NextPage } from "next";
import { marked } from "marked";


interface IProject {
  slug: string;
  projectData: {
    [key: string]: any;
  };
  content: string;
}

interface IProjectCard {
  props: {project: IProject};
}

const ProjectCard = (props: {project: IProject })=> {
  const { project } = props;
  return (
    <div className={styles.card} >
    <h2>{project.projectData.title}</h2>
    <h3>{project.projectData.description}</h3>
    <div dangerouslySetInnerHTML={{__html: marked(project.content)}}></div>
  </div>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard