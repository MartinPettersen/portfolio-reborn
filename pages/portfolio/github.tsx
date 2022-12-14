import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Axios from "axios";
import GithubCard from '../../components/GithubCard';


export const getServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.github.com/users/MartinPettersen/repos?", {
      'headers': {
        'Authorization': `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }
  );

  const repositorieList:any = [];
  await data.data.map(async (repositorie: any) => {
    // const languages = await Axios.get(repositorie.languages_url);
    // const readme = await Axios.get(repositorie.url + "/contents/README.md");
    repositorieList.push({
      name: repositorie.name,
      htmlUrl: repositorie.html_url,
      // languages,
      // readme,
    });
  });
  console.log(repositorieList);
  return {
    props: {
      repositories: await data.data,
      repList: await repositorieList,
    },
  };
};

const Github: NextPage = ({ repositories, repList }: any) => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Martin&apos;s About Page</title>
        <meta name="About Page" content="About Page" />

      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          All my public Projects on Github:
        </h3>
        {repositories.map((repositorie: any, i: any) => (
          <GithubCard key={i}repository={repositorie}/>
      ))}
      </main>


    </div>
  )
}

export default Github
