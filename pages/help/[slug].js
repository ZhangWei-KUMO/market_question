/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import Head from 'next/head';
import API_HOST from '../../utils/config';
import styles from '../../styles/Home.module.css';
import FixHeader from '../../components/fixheader';
import Footer from '../../components/footer';

const mapid = {
  userAgreement: '79550af260f69267281401a30f3b296a',
  aboutus: '28ee4e3e60f697052c0e592d5023c79a',
  privacyPolicy: 'cbddf0af60f6973d182a488744caafb5',
  purchaseAgreement: 'cbddf0af60f6977f182a56af0fbffe21',
  automaticRenewalAgreement: '79550af260f697cf28155fab67b26d1a',
};

function Help({ artical }) {
  const { title, content } = artical;
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
      <div className={styles.textContainer}>
        <h1 className={styles.agreeTitle}>{title}</h1>
        <div>
          <html dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <Footer />

    </>
  );
}

Help.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const res = await fetch(`${API_HOST}/helps/${mapid[slug]}`);
  const json = await res.json();
  return { artical: json.data };
};

export default Help;
