import cloudbase from '@cloudbase/js-sdk';
import { Component } from 'react';
import Registry from '../components/registry';

class Mail extends Component {
  componentDidMount() {
    const app = cloudbase.init({
      env: 'dazv2-9ggkxo9w26cfe2a9',
    });
  }

  render() {
    return (
      <div>
        <Registry />
      </div>
    );
  }
}

export default Mail;
