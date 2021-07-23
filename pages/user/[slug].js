/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { Layout, Avatar, Menu } from 'antd';
import {
  MailOutlined, SettingOutlined, FieldTimeOutlined, HeartOutlined, FormOutlined,
} from '@ant-design/icons';
import API_HOST from '../../utils/config';
import styles from '../../styles/User.module.css';
import FixHeader from '../../components/fixheader';
import request from '../../utils/request';
import Footer from '../../components/footer';
import defaultHead from '../../public/defaultHead.jpg';
import Settings from '../../components/settings';
import Feedback from '../../components/feedback';
import History from '../../components/history';
import Message from '../../components/message';
import Collection from '../../components/collection';

const { Content, Sider } = Layout;
const pagemap = {
  1: '我的收藏',
  2: '观看历史',
  3: '消息中心',
  4: '账号设置',
  5: '投诉反馈',
};

function User({ user }) {
  const {
    // name, phone, gender, messages, collection, history,
    _id,
  } = user;
  const router = useRouter();
  const { tab } = router.query;
  const handleClick = (e) => {
    router.push(`/user/${_id}?tab=${e.key}`, undefined, { shallow: true });
  };

  // console.log(name, phone, gender, messages, collection, history);
  return (
    <>
      <Head>
        <title>
          用户中心 | 答岸
        </title>
        <meta name="description" content="全球首个华人大师平台" />
      </Head>
      <Content className={styles.box}>
        <Layout>
          <Sider width={200} className={styles.sider}>
            <div className={styles.headBox}>
              <center>
                <Avatar src={<Image src={defaultHead} />} size={90} />
                <p className={styles.name}><strong>周杰伦</strong></p>
                <p className={styles.exprNotice}>会员到期：2022年7月21日</p>
              </center>
            </div>
            <Menu mode="inline" defaultSelectedKeys={[tab]} className={styles.siderMenu}>
              <Menu.Item key="1" onClick={handleClick}>
                <HeartOutlined />
                {' '}
                我的收藏
              </Menu.Item>
              <Menu.Item key="2" onClick={handleClick}>
                <FieldTimeOutlined />
                {' '}
                观看历史
              </Menu.Item>
              <Menu.Item key="3" onClick={handleClick}>
                <MailOutlined />
                {' '}
                消息中心
              </Menu.Item>
              <Menu.Item key="4" onClick={handleClick}>
                <SettingOutlined />
                {' '}
                账号设置
              </Menu.Item>
              <Menu.Item key="5" onClick={handleClick}>
                <FormOutlined />
                {' '}
                投诉反馈
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles.content}>
            <div className={styles.tabPage}>
              <center>
                <h1>{pagemap[tab]}</h1>
              </center>
              <div className={styles.tabInner}>
                {tab === '1' ? <Collection /> : null}
                {tab === '2' ? <History /> : null}
                {tab === '3' ? <Message /> : null}
                {tab === '4' ? <Settings /> : null}
                {tab === '5' ? <Feedback /> : null}
              </div>
            </div>
          </Content>

        </Layout>
      </Content>
      <FixHeader />
      <Footer />
    </>
  );
}

User.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const json = await request(`${API_HOST}/users/${slug}`, 'GET');
  return { user: json.data };
};

export default User;
