/* eslint-disable react/destructuring-assignment */
// import cloudbase from '@cloudbase/js-sdk';
import { Component } from 'react';
import Link from 'next/link';
import {
  Modal, Input, Select, Button,
} from 'antd';
import styles from './Login.module.css';
import checkPhone from '../../utils/checkphone';

const { Option } = Select;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '86',
      isAgree: null,
      phone: '',
      captch: '',
      password: null,
      isValidePhone: null,
      count: 0,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.autoCheckPhone = this.autoCheckPhone.bind(this);
    this.handleArea = this.handleArea.bind(this);
  }

  componentDidMount() {
    // const app = cloudbase.init({
    //   env: 'dazv2-9ggkxo9w26cfe2a9',
    // });
  }

  // 关闭弹窗
  handleCancel() {
    this.props.switchState(false);
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  // 选择不同地区
  handleArea(v) {
    this.setState({
      area: v,
      phone: '',
    });
  }

  handlePwd(e) {
    this.setState({
      password: e.value,
    });
  }

  onCheck() {
    const { isAgree } = this.state;
    this.setState({
      isAgree: !isAgree,
    });
  }

  autoCheckPhone() {
    const { area, phone } = this.state;
    const result = checkPhone(area, phone);
    this.setState({
      isValidePhone: result,
    });
  }

  render() {
    const {
      isAgree, phone, captch, password, count, area, isValidePhone,
    } = this.state;
    const { loginState } = this.props;
    return (
      <div>
        <Modal
          width={400}
          visible={loginState}
          onCancel={this.handleCancel}
          footer={null}
          style={{ borderRadius: '30px' }}
        >

          <h2 className={styles.title}>密码登录</h2>
          <Input.Group compact size="large">
            <Select defaultValue="86" size="large" style={{ width: '45%' }} value={area} onChange={this.handleArea}>
              <Option value="86">中国大陆 +86</Option>
              <Option value="852">中国香港 +852</Option>
              <Option value="853">中国澳门 +853</Option>
              <Option value="886">中国台湾 +886</Option>
            </Select>
            <Input
              style={{ width: '55%' }}
              onBlur={this.autoCheckPhone}
              onChange={this.handlePhone}
              placeholder="请输入注册手机号"
              value={phone}
            />
          </Input.Group>
          <p className={styles.noticeText}>
            {isValidePhone === false ? '请输入正确的手机号' : null}

          </p>
          <Input.Group compact size="large">
            <Input style={{ width: '55%' }} placeholder="请输入验证码" value={captch} />
            <div tyle={{ width: '35%' }}>
              {count === 0 ? (
                <Button
                  type="default"
                  size="large"
                  style={{ marginLeft: 40 }}
                  onClick={this.sendCaptch}
                  disabled={isValidePhone !== true}
                >
                  发送验证码
                </Button>
              ) : 60}
            </div>
          </Input.Group>
          <p className={styles.noticeText}>
            {/* 请输入正确验证码 */}
          </p>
          <Input.Password placeholder="请设置您的密码" size="large" value={password} onChange={this.handlePwd} />
          <p className={styles.noticeText}>
            {password !== '' ? null : '请输入8-20位字母、数字或字符，至少包含两种！'}
          </p>
          <p className={styles.noticeText}>{isAgree === false ? '请同意答岸网注册协议' : null}</p>
          <Button type="danger" className={styles.btn}>立即注册</Button>
          <div className={styles.back}>
            <Link href="/">
              <a href="true">
                返回账户登录
              </a>
            </Link>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
