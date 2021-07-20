import cloudbase from '@cloudbase/js-sdk';
import { Component } from 'react';

class LoginPage extends Component {
  componentDidMount() {
    const app = cloudbase.init({
      env: 'dazv2-9ggkxo9w26cfe2a9',
    });
  }

  render() {
    return (
      <div>
        空白页
      </div>

    );
  }
}

export default LoginPage;
