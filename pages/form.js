import { Input, Button } from 'antd';
import { Component } from 'react';
import styles from '../styles/Form.module.css'
const URL = "https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation"
class FormPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            tel:null
        }
    }
    static getInitialProps({query}) {
        return {query}
    }

    handleChange = (event)=>{
        this.setState({tel: event.target.value.trim()});
    }

    submit = async (e) => {
      let {price} = this.props.query;
      let {tel} = this.state;
      let res = await fetch(URL,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({price,tel})
      })
      alert("提交成功，三秒后将会返回首页")

    }
    render(){
        let {tel} = this.state;
        return(
            <div>
            <div className={styles.box}>
            <center>
           <h3 className={styles.title}></h3>
            <Input value={tel}
            placeholder="请输入您的手机号码"
             onChange={this.handleChange}/>
            <p className={styles.text}>请填写真实的手机号，产品上线后会赠予您一个月会员资格。</p>

           </center>
        </div>
        <Button type="primary" disabled={tel&&tel.length === 11?false:true} onClick={this.submit} className={styles.bottomBtn}>
              确认提交
            </Button>
        </div>
        )
    }

}


export default FormPage;