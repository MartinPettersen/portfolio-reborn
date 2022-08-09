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
    console.log(blogData);
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
  //console.log(posts);
  console.log(posts[0].blogData.title);
  console.log(posts[0].content);

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Blog</title>
        <meta name="Blog Page" content="Blog Page" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          One day something will be written here:
        </h3>
        <div className="blogContainer">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
