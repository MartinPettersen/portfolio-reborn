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

const Blog: NextPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState("Subscribe to get an Email whenever I post something new");

  const handleClick = () => {
    const windowFeatures = "left=400,top=400,width=800,height=800";

    const input = { text: userEmail };
    axios.post("/api/subscription", input).then((res) => setFeedback(res.data.status));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Blog</title>
        <meta name="Blog Page" content="Blog Page" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          {feedback}
        </h3>
        <input type="text" placeholder="email"
          name="email"  onChange={e=>setUserEmail(e.target.value)}/>
        <button onClick={handleClick}>Subscribe</button>
      </main>
    </div>
  );
};

export default Blog;
