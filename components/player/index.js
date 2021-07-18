/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import styles from './player.module.css';

// 播放器插件
class Player extends Component {
  constructor(props) {
    super(props);
    this.player = null;
    this.state = {

    };
  }

  componentDidMount() {
    const { id } = this.props;
    setTimeout(() => {
      this.player = TCPlayer('zhangweivideo', { // player-container-id 为播放器容器 ID，必须与 html 中一致
        fileID: id, // 请传入需要播放的视频 fileID（必须）
        appID: '1500006071', // 请传入点播账号的子应用appID 必须
        autoplay: true,
        // muted:true,
        poster: 'http://1500006071.vod2.myqcloud.com/4384a99evodtranscq1500006071/e45111b43701925921042492021/coverBySnapshot_10_0.jpg',
      });
    }, 500);
    setTimeout(() => {
      this.player.play();
    }, 1000);
  }

  pause() {
    this.player.pause();
  }

  play() {
    this.player.play();
  }

  render() {
    return (
      <div>
        <video
          id="zhangweivideo"
          preload="auto"
          className={styles.video}
          playsInline
          webkitplaysinline="true"
        />
        <button onClick={this.play} type="button">开始</button>
        <button onClick={this.pause} type="button">暂停</button>

      </div>
    );
  }
}
export default Player;
