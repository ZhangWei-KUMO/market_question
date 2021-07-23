import { Component } from 'react';
import {
  List, message, Avatar, Spin,
} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import request from '../../utils/request';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      hasMore: true,
    };
    this.handleInfiniteOnLoad = this.handleInfiniteOnLoad.bind(this);
  }

  async componentDidMount() {
    const json = await request(fakeDataUrl, 'GET');
    this.setState({
      data: json.data,
    });
  }

  handleInfiniteOnLoad() {
    const { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    const json = request(fakeDataUrl, 'GET');
    this.setState({
      loading: false,
      data: json.data,
    });
  }

  render() {
    const { loading, hasMore, data } = this.state;
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}
export default Message;
