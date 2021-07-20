import { Component } from 'react';
import { Tabs, Radio, Space } from 'antd';
import styles from './tabVideo.module.css';

const { TabPane } = Tabs;

class TabVideo extends Component {
  state = {
    tabPosition: 'right',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition="right">
          <TabPane tab={<div><p>h</p><p>ss</p></div>} key="1">
            <video src={``} className={styles.tabvideo}/>
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default TabVideo