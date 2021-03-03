import React, { useEffect, useState } from 'react';

import {
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  ReadOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';

import './menu.scss';

const MenuComponent = props => {
  const [currentPage, setCurrentPage] = useState('');
  const { history } = props;
  const { push } = history;

  useEffect(() => {
    if (props.match.path.split('/')[1] === '') {
      setCurrentPage('home');
      return;
    }
    setCurrentPage(props.match.path.split('/')[1]);
  }, []);

  const handlerKeyPressNextPage = (e, page) => {
    if (e.keyCode === 13) {
      handlerNextPage(page);
    }
  };

  const handlerNextPage = page => {
    push(page.key);
  };

  const menu = type => {
    return (
      <Menu theme="dark" mode={type} selectedKeys={`/${currentPage}`}>
        <Menu.Item
          key="/marvel/home"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <HomeOutlined /> Home
        </Menu.Item>
        <Menu.Item
          key="/marvel/characters"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <TeamOutlined /> Personagens
        </Menu.Item>
        <Menu.Item
          key="/marvel/comics"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <ReadOutlined />
          Quadrinhos
        </Menu.Item>
        <Menu.Item
          key="/marvel/series"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <VideoCameraOutlined />
          Série
        </Menu.Item>
        <Menu.Item
          key="/marvel/creators"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <UserOutlined />
          Criadores
        </Menu.Item>
        <Menu.Item
          key="/marvel/events"
          onClick={handlerNextPage}
          onKeyPress={handlerKeyPressNextPage}
          tabIndex="0"
        >
          <CalendarOutlined />
          Eventos
        </Menu.Item>
      </Menu>
    );
  };

  const render = () => {
    return (
      <div id="menu-component">
        {menu('horizontal')}

        <Dropdown overlay={menu.bind(this, '')} placement="bottomLeft">
          <Button>
            <MenuOutlined />
          </Button>
        </Dropdown>

        <div className="container-logo">
          <h2>Welcome to Marvel</h2>
          <img
            src={`${process.env.REACT_APP_CONTENT_HOST}/assets/images/logo.png`}
            className="logo"
          />
        </div>
      </div>
    );
  };

  return <>{render()}</>;
};
export default MenuComponent;
