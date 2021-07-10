import Head from 'next/head'
import { Component } from 'react';
import styles from '../styles/Video.module.css';

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
      
    }

    render(){
        return(
        <div>
          <Head>
          </Head>
          <div>
         
          </div>
        </div>
        )
    }

}


export default Video;