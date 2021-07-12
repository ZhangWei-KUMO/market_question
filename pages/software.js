import Head from 'next/head'
import { Component } from 'react';
import { Row,Col } from 'antd';
import Image from 'next/image'
import Android from '../public/v2rayNG.png'
import Config from '../public/config.png'

class Software extends Component{
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
      
    }

    render(){
        return(
        <div>
          <Head>
          </Head>
          <div>
           <Row>
               <Col lg={6}>
                   <h1>Android客户端</h1>
                   <Image width="200" height="200" src={Android} alt="1"/>
               </Col>
               <Col lg={6}>
                    <h1>iOS客户端</h1>
                    <p>使用美区账户登录App Store，下载shadowsocks</p>
               </Col>
               <Col lg={6}>
                    <h1>Mac OS客户端</h1>
                    <a href="https://github.com/yanue/V2rayU/releases/download/3.2.0/V2rayU.dmg">点击下载</a>
               </Col>  
           </Row>
           <h1>教程</h1>
           <p>打开软件，扫描下面二维码即可使用</p>
           <Image width="200" height="200" src={Config} alt="1"/>
           <p>MacOS系统可能由于系统限制的原因导致无法扫描二维码，可通过服务器设置--导入模式将下面URL导入进软件</p>
           <code>
           vmess://ewoidiI6ICIyIiwKInBzIjogIjIzM3YyLmNvbV8xMTkuMjguMTM2LjE1OSIsCiJhZGQiOiAiMTE5LjI4LjEzNi4xNTkiLAoicG9ydCI6ICIyNjA1MCIsCiJpZCI6ICIyN2U0MmQ1OC1iNzM5LTRkNWUtYTQ5ZC1iNTFlZGJkM2U3NWYiLAoiYWlkIjogIjAiLAoibmV0IjogInRjcCIsCiJ0eXBlIjogIm5vbmUiLAoiaG9zdCI6ICIiLAoicGF0aCI6ICIiLAoidGxzIjogIiIKfQo=


           </code>
          </div>
        </div>
        )
    }

}


export default Software;