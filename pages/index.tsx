import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you")
    setLiked(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s Portfolio Page</title>
        <meta name="Landing Page" content="Landing Page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My portfolio Page</h1>

        {liked === true ? (
          <p className={styles.message}>{message}</p>
        ) : (
          <div className="questionar">
            <p className={styles.question}>Awsome Right?</p>

            <div className={styles.buttonWrapper}>
              <div className={styles.buttonZoneLeft}>
                <button onClick={() => handleClick()} className={styles.yesButton}>Yes</button>
              </div>
              <div className={styles.buttonZoneRight}>
                <button className={styles.noButton}>No</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
