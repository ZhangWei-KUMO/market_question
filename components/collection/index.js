/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import { Row, Col } from 'antd';
import styles from './Collection.module.css';

const fakeData = [
  {
    _id: '1', title: '曾志伟教你演好琛哥', cover: 'https://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210722/162694647960f93bafe41aa.jpg', master: '曾志伟',
  },
  {
    _id: '2', title: '曾志伟教你演好琛哥', cover: 'https://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210722/162694647960f93bafe41aa.jpg', master: '曾志伟',
  },
  {
    _id: '3', title: '曾志伟教你演好琛哥', cover: 'https://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210722/162694647960f93bafe41aa.jpg', master: '曾志伟',
  },
  {
    _id: '4', title: '曾志伟教你演好琛哥曾志伟教你演好琛哥', cover: 'https://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210722/162694647960f93bafe41aa.jpg', master: '曾志伟',
  },
  {
    _id: '5', title: '曾志伟教你演好琛哥', cover: 'https://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210722/162694647960f93bafe41aa.jpg', master: '曾志伟',
  },

];
function History() {
  return (
    <div>
      <Row>
        {fakeData.map(((item) => (
          <Col lg={12} key={item._id}>
            <div className={styles.item}>
              <Image src={item.cover} layout="fixed" width={200} height={120} className={styles.image} />
              <div className={styles.text}>
                <h4>{item.title}</h4>
                <p>{item.master}</p>
              </div>
            </div>
          </Col>
        )))}

      </Row>
    </div>
  );
}

export default History;
