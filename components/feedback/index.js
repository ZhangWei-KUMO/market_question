import { Button, Radio, Input } from 'antd';
import styles from './Feedback.module.css';

const { TextArea } = Input;

function Feedback() {
  return (
    <div>
      <div className={styles.area}>
        <p>请选择问题发生的场景</p>
        <Radio.Group defaultValue="播放器" buttonStyle="solid">
          <Radio.Button value="播放器">播放器</Radio.Button>
          <Radio.Button value="视频内容">视频内容</Radio.Button>
          <Radio.Button value="个人中心">个人中心</Radio.Button>
          <Radio.Button value="闪退卡顿">闪退卡顿</Radio.Button>
          <Radio.Button value="搜索">搜索</Radio.Button>
          <Radio.Button value="支付">支付</Radio.Button>
          <Radio.Button value="没有喜欢的大师">没有喜欢的大师</Radio.Button>
          <Radio.Button value="其他">其他</Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.area}>
        <p>请输入您的意见（选填）</p>
        <TextArea style={{ height: 200 }} />
      </div>
      <center>
        <Button type="primary">提交</Button>
      </center>
    </div>
  );
}

export default Feedback;
