import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { Carousel,Row,Col, Layout, Button,Input,Card } from 'antd';
import Link from 'next/link';
import profilePic from '../public/logo_white.png'
import likes from '../public/data';

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
          {/* <Search placeholder="蔡澜" className={styles.inputbox} /> */}

        </Header>
      <Layout>
        <Content>
        <Carousel autoplay>
          <div className={styles.imgbox}>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/7b78db2a3701925920591664619/gBo3yADRGgAA.jpg!P13166.jpg"
             width={400}
             height={240}
             alt="master1"
             className={styles.carouselimg}
           />
          </div>
          <div className={styles.imgbox}>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/7945b6683701925920591580728/6NJlajdmVdYA.jpg!P13166.jpg"
                width={400}
                height={240}
                alt="master2"
              className={styles.carouselimg}

           />
          </div>
          <div className={styles.imgbox}>
           <Image src="http://1306346100.vod2.myqcloud.com/58c725bavodcq1306346100/8cf2ccc43701925920581572247/4YnDjEjVV0kA.jpg!P13166.jpg"
               width={400}
               height={240}
               alt="master3"
              className={styles.carouselimg}
           />
          </div>
        </Carousel>
        <Layout className={styles.box}>
          <h1 className={styles.tip}>猜你喜欢</h1>
          <Row gutter={16}>
          {likes.map(item=>(
            <Col span={12} key={item.id}>
              <div>
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