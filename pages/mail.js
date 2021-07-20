import cloudbase from '@cloudbase/js-sdk';
import { Component } from 'react';

class Mail extends Component {
  componentDidMount() {
    const app = cloudbase.init({
      env: 'dazv2-9ggkxo9w26cfe2a9',
      credentials: require('../tcb_login.json'),
    });

    const db = app.database();
    // 用户显式退出或更改密码之前的30天一直有效
    // const auth = app.auth({
    //   persistence: 'local',
    // });
    const watcher = db
      .collection('users')
      .where({
        name: 'zhangwei1988',
      }).watch({
        onChange(snapshot) {
          console.log('snapshot', snapshot);
        },
        onError(err) {
          throw new Error(err.toString());
        },
      });
  }

  render() {
    return (
      <div>Mail</div>
    );
  }
}

export default Mail;
