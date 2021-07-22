import Image from 'next/image';
import { Avatar } from 'antd';
import styles from './Settings.module.css';
import defaultHead from '../../public/defaultHead.jpg';

function Settings({
  userHead,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <span>头像  </span>
        {userHead ? <Avatar src={userHead} size={40} />
          : <Avatar src={<Image src={defaultHead} />} size={40} />}
      </div>
      <div className={styles.bar}>
        <span>昵称  </span>
      </div>
      <div className={styles.bar}>
        <span>性别  </span>
      </div>
      <div className={styles.bar}>
        <span>邮箱  </span>
      </div>
      <div className={styles.bar}>
        <span>密码  </span>
      </div>
    </div>
  );
}

export default Settings;
