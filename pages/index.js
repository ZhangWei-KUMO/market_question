/* eslint-disable jsx-a11y/media-has-caption */
import { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import homeAd from '../public/homepage_ad.png';
import styles from '../styles/Home.module.css';

const URL = 'http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210609/162322983860c0858e3028b.mp4';
class Home extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div>
        <Head>
          <title>答岸——全球首家华人大师线上课程平台</title>
        </Head>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerBox}>
            <Image src={homeAd} height={582} width={480} />
            <video src={URL} muted autoPlay autoSave className={styles.video} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
