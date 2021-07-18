/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button } from 'antd';
import Router from 'next/router';
import { UndoOutlined } from '@ant-design/icons';
import styles from './mask.module.css';

function relaod() {
  Router.reload(window.location.pathname);
}
function PlayMask(props) {
  const { nextcourse } = props;
  return (
    <div className={styles.mask}>
      <div className={styles.box}>
        <h1>{nextcourse.name}</h1>
        <Button type="danger">下一章节</Button>
        <p onClick={() => relaod()}>
          <UndoOutlined />
            &nbsp;
          重新观看
        </p>
      </div>
    </div>
  );
}

export default PlayMask;
