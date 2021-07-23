/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import React, { useState } from 'react';
import Head from 'next/head';
import {
  Layout, Menu, Row, Col,
} from 'antd';

import API_HOST from '../../utils/config';
import styles from '../../styles/User.module.css';
import FixHeader from '../../components/fixheader';
import request from '../../utils/request';
import Footer from '../../components/footer';
import SmallCard from '../../components/smallcard';

const { Content, Sider } = Layout;

function Classification({ items }) {
  const [currenItems, setItems] = useState(items);
  const handleClick = (e) => {
    if (e.key === '全部') { setItems(items); return; }
    const newItems = items.filter((item) => {
      if (item.tags.includes(e.key)) {
        return item;
      }
      return null;
    });
    setItems(newItems);
    // router.push(`/user/${user._id}?tab=${e.key}`, undefined, { shallow: true });
  };

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
            <Menu defaultSelectedKeys={['全部']} className={styles.siderMenu}>
              <Menu.Item key="全部" onClick={handleClick}>
                全部
              </Menu.Item>
              <Menu.Item key="电影电视" onClick={handleClick}>
                电影电视
              </Menu.Item>
              <Menu.Item key="文化艺术" onClick={handleClick}>
                文化艺术
              </Menu.Item>
              <Menu.Item key="体育竞技" onClick={handleClick}>
                体育竞技
              </Menu.Item>
              <Menu.Item key="科学科技" onClick={handleClick}>
                科学科技
              </Menu.Item>
              <Menu.Item key="音乐曲艺" onClick={handleClick}>
                音乐曲艺
              </Menu.Item>
              <Menu.Item key="生活品味" onClick={handleClick}>
                生活品味
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles.content}>
            <div className={styles.tabPage}>
              <div className={styles.tabInner}>
                <Row>
                  {currenItems.map((item) => (
                    <Col lg={6} key={item.cid}>
                      <SmallCard
                        title={item.name}
                        image={item.cover}
                        types={item.tags}
                        name={item.master}
                      />
                    </Col>
                  ))}
                </Row>
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

Classification.getInitialProps = async () => {
  const json = await request(`${API_HOST}/class`, 'GET');
  return { items: json.data };
};

export default Classification;
