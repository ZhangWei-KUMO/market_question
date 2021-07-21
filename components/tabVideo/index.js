import { Component } from 'react';
import { Tabs, Radio, Space } from 'antd';
import styles from './tabVideo.module.css';

const { TabPane } = Tabs;

function TabVideo({ FreeItems }) {
  return (
    <>
      <Tabs tabPosition="right">
        {FreeItems.map((item) => (
          <TabPane
            key={item.title}
            tab={(
              <div>
                <p className={styles.title}>{item.title}</p>
                <p>{item.name}</p>
              </div>
)}
          >
            <video src={item.url} className={styles.tabvideo} autoPlay controls muted />
          </TabPane>
        ))}

      </Tabs>
    </>
  );
}

export default TabVideo;
