import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/blog.module.css";
import type { NextPage } from "next";
import { marked } from "marked";

interface IPost {
  slug: string;
  blogData: {
    [key: string]: string;
    title: string;
    description: string;
    date: string;
  };
  content: string;
}

const BlogCard = (props: { post: IPost }) => {
  const { post } = props;
  return (
    <div className={styles.card}>
      <h2>{post.blogData.title}</h2>
      <h3>{post.blogData.description}</h3>
      <h3>{post.blogData.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
    </div>
  );
};

BlogCard.propTypes = {};

export default BlogCard;
