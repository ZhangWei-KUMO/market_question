/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Row, Col } from 'antd';
import Link from 'next/link';
import TabVideo from '../components/tabVideo';
import FixHeader from '../components/fixheader';
import Footer from '../components/footer';
import homeAd from '../public/homepage_ad.png';
import styles from '../styles/Home.module.css';
import API_HOST from '../utils/config';
import Card from '../components/card';

const URL = 'http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210721/162684890960f7be8dea44b.mp4';
class Home extends Component {
  static async getInitialProps() {
    try {
      const resRecom = await fetch(`${API_HOST}/recommendation?limit=8`);
      const resHotTeachers = await fetch(`${API_HOST}/hot_teachers?limit=8`);
      const resFreeList = await fetch(`${API_HOST}/free_list?limit=5`);
      const RecomJSON = await resRecom.json();
      const HotTeacherJSON = await resHotTeachers.json();
      const FreeItemJSON = await resFreeList.json();
      return {
        Recoms: RecomJSON.data,
        HotTeachers: HotTeacherJSON.data,
        FreeItems: FreeItemJSON.data,
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    const { Recoms, HotTeachers, FreeItems } = this.props;
    return (
      <div>
        <Head>
          <title>答岸——全球首家华人大师线上课程平台</title>
        </Head>
        <FixHeader />
        <div className={styles.bannerContainer}>
          <div className={styles.bannerBox}>
            <Image src={homeAd} height={582} width={480} />
            <video src={URL} muted autoPlay loop className={styles.video} preload="none" />
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.containerBox}>
            <h2 className={styles.title}>
              猜你喜欢
            </h2>
            <Row>
              {Recoms.map((item) => (
                <Col lg={6} key={item._id}>
                  <Link href={`/player?id${item.id}`}>
                    <a href="true">
                      <Card
                        title={item.title}
                        image={item.image}
                        types={item.types}
                        name={item.name}
                      />
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.containerBox}>
            <h2 className={styles.title}>
              免费试看
            </h2>
            <TabVideo FreeItems={FreeItems} />
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.containerBox}>
            <h2 className={styles.title}>
              热门名师
            </h2>
            <Row>
              {HotTeachers.map((item) => (
                <Col lg={6} key={item._id}>
                  <div className={styles.hotblock}>
                    <div className={styles.circle}>
                      <a href={`/teacher/${item.id}`}>
                        <Image
                          src={item.image}
                          height={225}
                          width={225}
                          className={styles.circleImage}
                        />
                      </a>
                    </div>
                    <h3>{item.name}</h3>
                    <center>
                      {item.types.map((j) => (
                        <div className={styles.tag} key={j}>{j}</div>
                      ))}
                    </center>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
