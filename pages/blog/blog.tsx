import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import { marked } from "marked";
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface IPost {
  slug: string;
  blogData: {
    [key: string]: any;
  };
  content: string;
}
interface IPosts {
  posts: IPost[];
}

export async function getStaticProps() {
  const blogFiles = fs.readdirSync(path.join("posts/blogposts"));

  const blogposts = blogFiles.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdown = fs.readFileSync(
      path.join("posts/blogposts", filename),
      "utf-8"
    );

    const { data: blogData, content } = matter(markdown);
    return {
      slug,
      blogData,
      content,
    };
  });

  return {
    props: {
      posts: blogposts.sort(sortByDate),
    },
  };
}

const Blog: NextPage<IPosts> = ({ posts }) => {
  const handleClick = () => {
    const windowFeatures = "left=100,top=100,width=320,height=320";
    const handle = window.open(
      "https://www.martincodeportfolio.com/blog/subscriptionPage",
      "subscriptionwindow",
      windowFeatures
    );

    //const input = { text: "matchNewline@gmail.com" };
    //axios.post("/api/subscription", input).then((res) => console.log(res.data));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Blog</title>
        <meta name="Blog Page" content="Blog Page" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          One day something good will be written here
        </h3>
        <button onClick={handleClick}>Subscribe</button>
        <div className="blogContainer">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
