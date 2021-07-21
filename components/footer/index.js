import {
  Row, Col, Divider,
} from 'antd';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Divider />
      <div className={styles.footerContainer}>
        <Row>
          <Col lg={4}>
            <ul>
              <h4>协议</h4>

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
              <h4>关于</h4>
              <li>
                <Link href="/help/aboutus">
                  <a href="true">
                    关于我们
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/help/privacyPolicy">
                  <a href="true">
                    隐私政策
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <p>
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          苏州云帧数浪信息科技有限公司 版权所有
          {' '}
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            苏ICP备19027707号-1
          </a>

        </p>
      </div>

    </div>
  );
}
