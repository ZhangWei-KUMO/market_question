import Image from 'next/image';
import { Row, Col, Tag } from 'antd';
import Link from 'next/link';
import styles from './Header.module.css';
import HeadLogo from '../../public/headLogo.png';

export default function FixHeader({ props }) {
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
            <Link href="/html/">
              <a href="true">首页</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">电影电视</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">商业社会</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">体育竞技</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">免费试看</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">专栏</a>
            </Link>
          </li>
          <li>
            <Link href="/html/">
              <a href="true">手记</a>
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}
