import Image from 'next/image';
import {
  Row, Col, Tag, Divider,
} from 'antd';
import Link from 'next/link';
import styles from './Footer.module.css';
import HeadLogo from '../../public/headLogo.png';

export default function Footer({ props }) {
  return (
    <div className={styles.footer}>
      <Divider />
      <Row>
        <Col lg={4}>
          <ul>
            <li>
              <Link href="/help/userAgreement">
                <a href="true">
                  用户协议
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help/purchaseAgreement">
                <a href="true">
                  购买协议
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help/automaticRenewalAgreement">
                <a href="true">
                  自动续费协议
                </a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg={4}>
          <ul>
            <li>
              <Link href="aboutus">
                <a href="true">
                  关于我们
                </a>
              </Link>
            </li>
            <li>
              <Link href="privacyPolicy">
                <a href="true">
                  隐私政策
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <p>
        Copyright © 2021 DaZ Master All Rights Reserved |
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2021007143号-1 </a>
        京公网安备11010802030151号
      </p>
    </div>
  );
}
