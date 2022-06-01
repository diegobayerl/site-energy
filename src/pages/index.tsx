import Head from 'next/head';
import { Slider } from '../components/Slider';

import styles from '../styles/home.module.scss';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Energy Jr</title>
      </Head>
      <main className={styles.main}>
        <Slider />
      </main>
    </>
  )
}
