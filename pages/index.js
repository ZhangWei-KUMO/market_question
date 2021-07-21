/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Row, Col, Tag } from 'antd';
import Link from 'next/link';
import TabVideo from '../components/tabVideo';
import FixHeader from '../components/fixheader';
import Footer from '../components/footer';
import homeAd from '../public/homepage_ad.png';
import styles from '../styles/Home.module.css';
import API_HOST from '../utils/config';
import HotIcon from '../public/hot_icon.png';
import TopIcon from '../public/top_icon.png';
import LineIcon from '../public/line_icon.png';

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
            <h2>
              <Image src={TopIcon} height={30} width={50} />
              猜你喜欢
            </h2>
            <Row>
              {Recoms.map((item) => (
                <Col lg={6} key={item._id}>
                  <div className={styles.card}>
                    <Link href={`/player?id${item.id}`}>
                      <a href="true">
                        <Image
                          src={item.image}
                          height={270}
                          width={312}
                          className={styles.cardImage}
                        />
                        <div className={styles.cardText}>
                          <h3>{item.title}</h3>
                          <p>{item.name}</p>
                          {item.types.map((j, k) => (
                            <Tag key={j} color={k === 0 ? '#f50' : '#2db7f5'}>{j}</Tag>
                          ))}
                        </div>
                      </a>

                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div>
          <div className={styles.containerBox}>
            <h2>
              <Image src={LineIcon} height={30} width={50} />
              免费试看
            </h2>
            <TabVideo FreeItems={FreeItems} />
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.containerBox}>
            <h2>
              <Image src={HotIcon} height={30} width={50} />
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
                        <Tag key={j}>{j}</Tag>
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
