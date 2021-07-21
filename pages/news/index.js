/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import Head from 'next/head';
import Image from 'next/image';
import moment from 'moment';
import API_HOST from '../../utils/config';
import styles from '../../styles/News.module.css';
import FixHeader from '../../components/fixheader';
import request from '../../utils/request';
import Footer from '../../components/footer';

function NewsList({ items }) {
  return (
    <>
      <Head>
        <title>
          新闻室 |答岸
        </title>
        <meta name="description" content="全球首个华人大师平台" />
      </Head>
      <FixHeader />
      <div className={styles.container}>
        <div className={styles.pagename}>
          <h1>新闻室</h1>
        </div>
        {items.map((item, key) => (
          <div key={item._id} className={styles.bar}>
            <a href={`/news/${item._id}`}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <div className={styles.imageBox}>
                    <Image src={item.cover} layout="fixed" width={350} height={400} />
                  </div>
                </div>
                <div className={styles.text}>
                  <div>
                    <h2>NEWSROOM</h2>
                    <h1>{item.title}</h1>
                    <p>{moment(item.publish_data).format('YYYY-MM-DD')}</p>
                  </div>
                </div>
              </div>
            </a>

          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

NewsList.getInitialProps = async () => {
  // 根据大师id请求大师个人信息
  const json = await request(`${API_HOST}/news?limit=10&fields={"content":0}`, 'GET');
  return { items: json.data };
};

export default NewsList;
