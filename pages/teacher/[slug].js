/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import Head from 'next/head';
import Image from 'next/image';
import { Button } from 'antd';
import Link from 'next/link';
import API_HOST from '../../utils/config';
import styles from '../../styles/Teacher.module.css';
import FixHeader from '../../components/fixheader';
import request from '../../utils/request';
import Flag from '../../public/flag-bg.png';

function Help({ master }) {
  const {
    title, achieve, author, intro, roles, list, cover, head, num,
  } = master;
  console.log(list);
  return (
    <>
      <Head>
        <title>
          {title}
          |答岸
        </title>
        <meta name="description" content="全球首个华人大师平台" />
      </Head>
      <FixHeader />
      <div>
        <div
          className={styles.cover}
          style={{
            background: `url(${cover})`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={styles.mask}>
            <div className={styles.masterBox}>
              <div className={styles.masterHeadBox}>
                <Image
                  src={head}
                  className={styles.masterHead}
                  height={185}
                  width={190}
                />
              </div>
              <div className={styles.redFlag}>
                <center>
                  <p>答岸特邀大师</p>
                  <Image
                    src={Flag}
                    height={55}
                    width={230}
                  />
                </center>
              </div>
              <h1>{author}</h1>
              <p>{roles}</p>
              <p>
                主要成就：
                {achieve}
              </p>
              <p>{intro}</p>
              <Link href={`/player?id=${num}`}>
                <a href="true">
                  <Button type="danger">开始课程</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

Help.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const json = await request(`${API_HOST}/master/find?limit=1`, 'POST', {
    query: {
      num: slug,
    },
  });
  return { master: json.data[0] };
};

export default Help;
