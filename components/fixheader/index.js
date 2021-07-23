/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from 'antd';
import { MobileOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import HeadLogo from '../../public/headLogo.png';
import defaultHead from '../../public/defaultHead.jpg';
import Registry from '../registry';
import Login from '../login';

export default function FixHeader({ userid = 'cbddf0af60f5732c17f6a5f01c0efd3d', userHead }) {
  const [registryState, setRegistry] = useState(false);
  const [loginState, setLogin] = useState(false);

  return (
    <div className={styles.fixheader}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/html/">
            <a href="true">
              <Image
                src={HeadLogo}
                height={40}
                width={120}
                alt="答岸-全球首个华人大师平台"
                className={styles.logoImg}
              />
            </a>
          </Link>
        </div>
        <div className={styles.items}>
          <li>
            <a href="/">首页</a>
          </li>
          <li>
            <a href="/classification">分类</a>
          </li>
          <li>
            <a href="/news">新闻室</a>
          </li>
        </div>
        <div className={styles.right}>
          <li>
            <SearchOutlined height={60} style={{ color: '#fff', fontSize: '1.2rem' }} />
          </li>
          <li>
            <MobileOutlined height={60} style={{ color: '#fff', fontSize: '1.2rem' }} />
          </li>
          {userid ? (

            <li>
              <a href={`/user/${userid}?tab=1`}>
                <div className={styles.headBox}>
                  {userHead ? <Avatar src={userHead} size={40} />
                    : <Avatar src={<Image src={defaultHead} />} size={40} />}
                </div>
              </a>
            </li>

          )
            : (
              <>
                <li>
                  <a onClick={() => setLogin(true)}>登录</a>
                </li>
                <li>
                  <a onClick={() => setRegistry(true)}>注册</a>
                </li>
              </>
            )}

        </div>
      </nav>
      <Registry registryState={registryState} switchState={() => setRegistry(false)} />
      <Login loginState={loginState} switchState={() => setLogin(false)} />
    </div>
  );
}
