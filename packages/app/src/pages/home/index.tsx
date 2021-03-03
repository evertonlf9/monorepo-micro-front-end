import React from 'react';

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const Home: React.FC = () => {
  const handleClick = (e: any): void => {
    console.log('click ', e);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={['/']} mode="horizontal">
        <Menu.Item key="star-wars" icon={<MailOutlined />}>
          <a href="/start-wars">Start-wars</a>
        </Menu.Item>
        <Menu.Item key="Marvel" icon={<AppstoreOutlined />}>
          <a href="/marvel">Marvel</a>
        </Menu.Item>
        <Menu.Item key="my-app" icon={<SettingOutlined />}>
          <a href="/myapp">My app</a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Home;
