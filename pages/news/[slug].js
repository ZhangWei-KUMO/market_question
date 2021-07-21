/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import Head from 'next/head';
import moment from 'moment';
import API_HOST from '../../utils/config';
import styles from '../../styles/News.module.css';
import FixHeader from '../../components/fixheader';
import request from '../../utils/request';
import Footer from '../../components/footer';

function News({ news }) {
  const { title, publish_data, content } = news;
  return (
    <>
      <Head>
        <title>
          {title}
          |答岸新闻室
        </title>
        <meta name="description" content="全球首个华人大师平台" />
      </Head>
      <FixHeader />
      <div className={styles.artical}>
        <h4>{moment(publish_data).format('YYYY-MM-DD')}</h4>
        <h1>{title}</h1>
        <div>
          <html dangerouslySetInnerHTML={{ __html: content }} className={styles.xml} />
        </div>
      </div>
      <Footer />
    </>
  );
}

News.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const json = await request(`${API_HOST}/news/${slug}`, 'GET');
  return { news: json.data };
};

export default News;
