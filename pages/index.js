import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { Carousel,Row,Col, Layout, message,Input,Card,Modal } from 'antd';
import profilePic from '../public/logo_white.png'
import likes from '../public/data';
import Link from 'next/link';

const { Header, Content } = Layout;

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
        tel:null,
        isModalVisible:false,
        isLoading:false,
        price:"45元/月"
    }
  }
  

  static getInitialProps({query}) {
    return {query}
  }
  
  componentDidMount(){
    setTimeout(()=>{
      var player = TCPlayer('zhangweivideo', { // player-container-id 为播放器容器 ID，必须与 html 中一致
        fileID: '3701925920619699063', // 请传入需要播放的视频 fileID（必须）
        appID: "1500005956", // 请传入点播账号的子应用appID 必须
        autoplay: true,
        psign: ""
      });    
    },500)
 
    let {price} = this.props.query;
    if(price){
      this.setState({
        price
      })
    }
  }

  showModal = () => {
    this.setState({
      isModalVisible:true
    })
  };

  handleCancel = () => {
    this.setState({
      isModalVisible:false
    })
  };
  
  // 确认按钮
  handleOk = async () => {
    let {tel,price} = this.state;
    if(!tel || tel.length !== 11){
      message.warning('请输入正确的手机电话号码');
    }else{
      this.setState({isLoading:true});
      try{
        let res = await fetch("/api/submit",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({price,tel})
        });
        message.success("提交成功,三秒后刷新页面");
        setTimeout(()=>{
          location.reload()
                },3000)

      }catch(e){
        message.error("请求失败，请检查当前网络后刷新后提交")
      }
    }
    // this.setState({
    //   isModalVisible:false
    // })
  };

  handleChange = (event)=>{
    this.setState({tel: event.target.value.trim()});
  }

  submit =  async () => {  
   
  alert("提交成功，三秒后将会返回首页")
  }
  render(){
    let {price,isModalVisible,isLoading} = this.state;
    return(
      <div className={styles.container}>
      <Head>
        <title>答岸——市场问卷调查</title>
        <meta name="description" content="全球首个华人大师平台" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Layout >
        <Header className={styles.header}>
          <Row>
            <Col span={4}>
              <Image src={profilePic} width={40} height={40}/>
            </Col>
            <Col span={20}>
                <span className={styles.slogan}>达者为师，明鉴是岸</span>
            </Col>
          </Row>
        </Header>
      <Layout>
        <Content>
        <video id="zhangweivideo"
           preload="auto"
           className={styles.video}
           playsInline 
           webkitplaysinline="true" 
            >
          </video>
        {/* <Carousel autoplay>
          <div className={styles.imgbox}>
           <Link href="/video?id="><a>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/7b78db2a3701925920591664619/gBo3yADRGgAA.jpg!P13166.jpg"
             width={400}
             height={240}
             alt="master1"
             className={styles.carouselimg}
           />
           </a></Link>
          </div>
          <div className={styles.imgbox}>
          <Link href="/video?id="><a>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/7945b6683701925920591580728/6NJlajdmVdYA.jpg!P13166.jpg"
                width={400}
                height={240}
                alt="master2"
              className={styles.carouselimg}
           />
            </a></Link>
          </div>
          <div className={styles.imgbox}>
          <Link href="/video?id="><a>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/8cf2ccc43701925920581572247/4YnDjEjVV0kA.jpg!P13166.jpg"
               width={400}
               height={240}
               alt="master3"
              className={styles.carouselimg}
           />
             </a></Link>
          </div>
        </Carousel> */}
        <Layout className={styles.box}>
          <h1 className={styles.tip}>热门名师</h1>
          <Row gutter={16}>
          {likes.map(item=>(
            <Col span={12} key={item.id}>
               <Link href={`/video?id=${item.id}`}><a>
              <Card hoverable={true}
                   className={styles.startcard}
                   style={{marginBottom:12}}
                   cover={<Image alt="example" src={item.cover} 
                   className={styles.startimg}
                   width={300}
                   height={280}/>}>
                     <h1>{item.name}</h1>
                     <p>{item.description} </p>
               </Card>
               </a></Link>
            </Col>
          ))}
          </Row>
        </Layout>
        </Content>
      </Layout>
        </Layout>
      </main>
      
      <div className={styles.bottomBtn}>
        <Row gutter={16}>
        <Col span={14}>
           会员价 {price}
        </Col>
        <Col span={8}>
        <button onClick={this.showModal} className={styles.gold}> 立即购买</button>
        <Modal visible={isModalVisible} 
        onOk={this.handleOk} 
        onCancel={this.handleCancel}
        confirmLoading={isLoading}
        okText="确认" cancelText="取消"
        >
        <p>感谢您参与本次模拟实验</p>
          <Input value={this.state.tel}
            placeholder="手机号码"
            onChange={this.handleChange}/>
          <p className={styles.notes}>请填写真实的手机号，产品上线后会赠予您一个月会员资格。</p>
      </Modal>
        </Col>
        </Row>
      </div>
    </div>
    )
  }
}
export default Home;