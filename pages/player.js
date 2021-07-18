import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Component } from 'react'
import styles from '../styles/Player.module.css'
import { Row,Col, Layout, message,Input,Card,Modal } from 'antd';
import profilePic from '../public/logo_white.png'
// import Player from '../components/player';
const { Header, Content } = Layout;

const Player = dynamic(
  () => import('../components/player'),
  { loading: () => <p>Loading</p> }
)

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
  
  render(){
    let {id} = this.props.query;
    return(
      <div className={styles.container}>
      <Head>
        <title>答岸——</title>
        <meta name="description" content="全球首个华人大师平台" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Layout >
        <Header className={styles.header}>
          <Row>
            <Col span={4}>
              {/* <Image src={profilePic} width={40} height={40}/> */}
            </Col>
            <Col span={20}>
            </Col>
          </Row>
        </Header>
      <Layout>
        <Content>
       <Player id={id}/>
        </Content>
      </Layout>
        </Layout>
      </main>

    </div>
    )
  }
}
export default Home;