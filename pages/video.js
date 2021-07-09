import Head from 'next/head'
import { Component } from 'react';
import styles from '../styles/Video.module.css';

let url = "https://daz-finalcut-1306346100.cos.ap-nanjing.myqcloud.com/%E8%B5%96%E5%A3%B0%E5%B7%9D/lsct1.mp4";

class Video extends Component{
    constructor(props){
        super(props);
        this.state = {
            tel:null
        }
    }
    static getInitialProps({query}) {
        return {query}
    }

    componentDidMount(){
            var player = TCPlayer('zhangweivideo', { // player-container-id 为播放器容器 ID，必须与 html 中一致
                fileID: '3701925920619699063', // 请传入需要播放的视频 fileID（必须）
                appID: "1500005956", // 请传入点播账号的子应用appID 必须
                autoplay: true,
                psign: ""
              });
    }

    render(){
        return(
        <div>
          <Head>
          <link href="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/tcplayer.min.css" rel="stylesheet"/>
            <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/libs/hls.min.0.13.2m.js"></script>
            <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.2.1/tcplayer.v4.2.1.min.js"></script>
          </Head>
          <div>
          <video id="zhangweivideo"
           preload="auto"
           className={styles.video}
           playsInline 
           webkitplaysinline="true" 
            >
          </video>
          </div>
        </div>
        )
    }

}


export default Video;