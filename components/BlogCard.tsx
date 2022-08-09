import React from 'react'
import PropTypes from 'prop-types'
import styles from "../styles/blog.module.css";
import type { NextPage } from "next";


interface IPost {
  slug: string;
  blogData: {
    [key: string]: any;
  };
  content: string;
}

interface IBlogCard {
  props: {post: IPost};
}

const BlogCard = (props: {post: IPost })=> {
  const { post } = props;
  return (
    <div className={styles.card} >
    <h3>{post.blogData.title}</h3>
    <h3>{post.blogData.description}</h3>
    <h3>{post.blogData.date}</h3>
    <p>{post.content}</p>
  </div>
  )
}

BlogCard.propTypes = {}

export default BlogCard