import Head from "next/head";
import Post from "../../elements/Post/Post";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inifinite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
};

export default HomePage;
