/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import HeadLogo from '../../public/headLogo.png';
import Registry from '../registry';

export default function FixHeader() {
  const [registryState, setRegistry] = useState(false);

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
            <Link href="/">
              <a href="true">首页</a>
            </Link>
          </li>
          <li>
            <Link href="/classification">
              <a href="true">分类</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a href="true">新闻室</a>
            </Link>
          </li>
        </div>
        <div className={styles.right}>
          <li>
            <a href="/#">登录</a>
          </li>
          <li>
            <a onClick={() => setRegistry(true)}>注册</a>
          </li>
        </div>
      </nav>
      <Registry registryState={registryState} switchState={() => setRegistry(false)} />
    </div>
  );
}
