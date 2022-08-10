import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/blog.module.css";
import type { NextPage } from "next";
import { marked } from "marked";
import Link from "next/link";

interface IRepository {
  slug: string;
  repositoryData: {
    [key: string]: any;
  };
  content: string;
}

interface IRepositoryCard {
  props: { repository: IRepository };
}

const GithubCard = (props: { repository: any }) => {
  const { repository } = props;
  console.log(repository);
  return (
    <div className={styles.card}>
      <h2>Name: {repository.name}</h2>
      <h2>Description: {repository.description}</h2>
      <h2>Languages: {repository.language}</h2>

      <Link href={repository.html_url}>
        <a className={styles.linkButton}>Go to repository</a>
      </Link>
    </div>
  );
};

GithubCard.propTypes = {};

export default GithubCard;
