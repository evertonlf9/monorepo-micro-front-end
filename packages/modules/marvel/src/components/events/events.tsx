import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import { bindActionCreators } from 'redux';

import ListComponent from '../../core/components/list/list';
import MenuComponent from '../../core/components/menu/menu';
import { CharactersActions } from '../../core/store';

import './events.scss';

const { Header, Footer } = Layout;

const Events = props => {
  const [paginate, setPaginate] = useState('');
  const { getDataApi, data } = props;

  useEffect(() => {
    getCharacter({ type: 'events', offset: 0, limit: 10, name: '' });
  }, []);

  const getCharacter = params => {
    setPaginate(params);
    getDataApi(params);
  };

  const render = () => {
    return (
      <div id="events-component">
        <Layout className="layout">
          <Header>
            <MenuComponent {...props} />
          </Header>

          <ListComponent
            {...props}
            getData={getCharacter}
            paginate={paginate}
            type={paginate.type}
            data={data.results}
            total={data.total}
          />

          <Footer style={{ textAlign: 'center' }}>
            &copy; 2020 by{' '}
            <a href="http://marvel.com/" target="_blank">
              Marvel
            </a>
          </Footer>
        </Layout>
      </div>
    );
  };

  return <>{render()}</>;
};

const mapStateToProps = state => {
  const { characters } = state;

  return {
    loading: characters.loading,
    data: characters.data,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CharactersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);
