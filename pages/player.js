import Head from 'next/head';
import { Component } from 'react';
import dynamic from 'next/dynamic';
import {
  Row, Col, Layout,
} from 'antd';
import styles from '../styles/Player.module.css';

const { Header, Content } = Layout;

const Player = dynamic(
  () => import('../components/player'),
  { loading: () => <p>Loading</p> },
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { query } = this.props;
    const { id } = query;
    return (
      <div className={styles.container}>
        <Head>
          <title>答岸——</title>
          <meta name="description" content="全球首个华人大师平台" />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Layout>
            <Header className={styles.header}>
              <Row>
                <Col span={4}>
                  {/* <Image src={profilePic} width={40} height={40}/> */}
                </Col>
                <Col span={20} />
              </Row>
            </Header>
            <Layout>
              <Content>
                <Player id={id} />
              </Content>
            </Layout>
          </Layout>
        </main>
      </div>
    );
  }
}
export default Home;
