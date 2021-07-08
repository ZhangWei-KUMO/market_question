import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { Carousel,Row,Col, Layout, Button,Input,Card } from 'antd';
import Link from 'next/link';
import profilePic from '../public/logo_white.png'
import {likes} from './data';

const { Header, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
        price:"45元/月"
    }
}

  static getInitialProps({query}) {
    return {query}
  }

  componentDidMount(){
    let {price} = this.props.query;
    if(price){
      this.setState({
        price
      })
    }
  }

  submit =  async () => {  
    const res = await fetch(`https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation`)
    const data = await res.json();
   
    if(!data){
      alert("提交失败，请检查当前网络环境")
    }else{
      console.log(data)
    }
  }
  render(){
    let {price} = this.state;
    return(
      <div className={styles.container}>
      <Head>
        <title>答岸</title>
        <meta name="description" content="全球首个华人大师平台" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Layout >
        <Header className={styles.header}>
          <Image src={profilePic} alt="Picture of the author" width="40" height="40"/>
          <Search placeholder="蔡澜" className={styles.inputbox} />

        </Header>
      <Layout>
        <Content>
        <Carousel autoplay>
          <div className={styles.imgbox}>
           <Image src="http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210702/162519484060de8158e4aa7.jpg"
             width={400}
             height={240}
             className={styles.carouselimg}
           />
          </div>
          <div className={styles.imgbox}>
           <Image src="http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210706/162554153660e3cba0463da.jpg"
                width={400}
                height={240}
              className={styles.carouselimg}

           />
          </div>
          <div className={styles.imgbox}>
           <Image src="http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20210707/162562493560e51167d3392.jpg"
               width={400}
               height={240}
              className={styles.carouselimg}
           />
          </div>
        </Carousel>
        <Layout className={styles.box}>
          <h1>猜你喜欢</h1>
          <Row gutter={16}>
          {likes.map(item=>(
            <Col span={12} key={item.id}>
              <div>
              <Card hoverable
                  style={{ width: 180 }}
                   cover={<img alt="example" src={item.cover}/>}>
            <Meta title={item.name} description={item.description} />
  </Card>
              </div>
            </Col>
          ))}
          </Row>
        </Layout>
        </Content>
      </Layout>
        </Layout>
      </main>
      
      <Link href={`/form?price=${price}`}><a>
      <div className={styles.bottomBtn}>
        <Row gutter={16}>
        <Col span={16}>
           会员价 {price}
        </Col>
        <Col span={8}>
        <Button type="primary"> 立即购买</Button>
        </Col>
        </Row>
      </div>
      </a></Link>
    </div>
    )
  }
}
export default Home;