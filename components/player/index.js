/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
// import Link from 'next/link';
import { Drawer } from 'antd';
import {
  LeftOutlined, UnorderedListOutlined, TagsOutlined, UploadOutlined, VideoCameraFilled,
} from '@ant-design/icons';
import styles from './player.module.css';
import PlayerMask from '../player-mask';

const items = [
  { cid: '3701925921042492021', name: '大师介绍:曾志伟', cover: '' },
  { cid: '213b49feee1d33f45d4c62', name: '如何走进电影圈', cover: '' },
  { cid: '28c3e4848bf134fe9672ac', name: '早期的入行经历', cover: '' },
  { cid: '23eafba34d7735d5e491ff', name: '入行面临的挑战', cover: '' },
];

// 播放器插件
class Player extends Component {
  constructor(props) {
    super(props);
    this.btnRef = React.createRef();
    this.player = null;
    this.state = {
      title: '导演的自我修养',
      isListVisible: false,
      videoState: 'loading',
      nextcourse: {
        name: '播放结束',
      },
    };
    this.onCloseList = this.onCloseList.bind(this);
  }

  componentDidMount() {
    // 获取当前课程id
    const { id } = this.props;
    for (let i = 0; i < items.length; i++) {
      if (items[i].cid === id) {
        const nextcourse = items[i + 1];
        if (typeof nextcourse === 'object') {
          this.setState({
            nextcourse,
          });
        }
      }
    }

    setTimeout(() => {
      this.player = TCPlayer('zhangweivideo', { // player-container-id 为播放器容器 ID，必须与 html 中一致
        fileID: id, // 请传入需要播放的视频 fileID（必须）
        appID: '1500006071', // 请传入点播账号的子应用appID 必须
        autoplay: true,
        // muted: true,
        poster: 'http://1500006071.vod2.myqcloud.com/4384a99evodtranscq1500006071/e45111b43701925921042492021/coverBySnapshot_10_0.jpg',
      });
      this.player.on('loadstart', () => {
        console.log('开始加载数据');
      });
      // 监听处于全屏状态
      this.player.on('fullscreenchange', () => {
        console.log('全屏');
      });
      // 获取媒体数据，对于HLS格式会进行分段获取
      this.player.on('progress', () => {
        console.log('获取媒体数据');
      });
      this.player.on('canplay', () => {
        console.log('可以播放');
        // setTimeout(() => {
        //   this.btnRef.current.click();
        // }, 3000);
      });
      this.player.on('error', () => {
        console.log('视频播放出现未知错误');
      });
      this.player.on('volumechange', () => {
        console.log('音量发送变化');
      });
      this.player.on('ended', () => {
        this.setState({
          videoState: 'ended',
        });
      });
      this.player.on('loadeddata', () => {
        console.log('当前网络似乎并不畅通');
      });
    }, 1500);
  }

  onChangeList() {
    const { isListVisible } = this.state;
    this.setState({
      isListVisible: !isListVisible,
    });
  }

  onCloseList() {
    this.setState({
      isListVisible: false,
    });
  }

  pause() {
    this.player.pause();
  }

  play() {
    this.player.play();
  }

  render() {
    const {
      isListVisible, title, videoState, nextcourse,
    } = this.state;
    return (
      <div className={styles.bc}>
        <div className={styles.sidebar}>
          <div className={styles.item}>
            <a href="true">
              <div>
                <LeftOutlined style={{ fontSize: '24px' }} />
              </div>
              返回
            </a>
          </div>
          <div className={styles.item} onClick={() => this.onChangeList()} role="button">
            <div>
              <UnorderedListOutlined style={{ fontSize: '24px' }} />
            </div>
            章节
          </div>
          <div className={styles.item}>
            <div>
              <TagsOutlined style={{ fontSize: '24px' }} />
            </div>
            收藏
          </div>
          <div className={styles.item}>
            <div>
              <UploadOutlined style={{ fontSize: '24px' }} />
            </div>
            反馈
          </div>
        </div>
        <div className={styles.inner}>
          {/* 视频结束后的遮罩层 */}
          {videoState === 'ended' ? <PlayerMask nextcourse={nextcourse} /> : null}
          <div className={styles.header}>第1章:  大师介绍:曾志伟</div>
          <video
            id="zhangweivideo"
            preload="auto"
            className={styles.video}
            playsInline
            webkitplaysinline="true"
          />
        </div>
        {/* <button onClick={() => this.play()} type="button" ref={this.btnRef}>开始</button>
        <button onClick={() => this.pause()} type="button">暂停</button> */}
        <Drawer
          drawerStyle={{ background: '#26292c', color: '#fff' }}
          width={400}
          placement="right"
          closable
          onClose={this.onCloseList}
          visible={isListVisible}
        >
          <h2 className={styles.title}>{title}</h2>
          {items.map((item, key) => (
            <p key={item.cid}>
              <VideoCameraFilled />
              &nbsp;
              第
              {key + 1}
              章:
              &nbsp;
              {item.name}
            </p>
          ))}
        </Drawer>
      </div>
    );
  }
}
export default Player;
