import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';
import { bindActionCreators } from 'redux';

import ListComponent from '../../core/components/list/list';
import MenuComponent from '../../core/components/menu/menu';
import { StarwarsActions } from '../../core/store';

import './films.scss';

const Films = props => {
  const [paginate, setPaginate] = useState('');
  const { getDataApi, data, loading } = props;

  useEffect(() => {
    getData({ type: 'films', pageSize: 10, currentPage: 1, searchText: '' });
  }, []);

  const getData = params => {
    setPaginate(params);
    getDataApi(params);
  };

  const render = () => {
    return (
      <div id="character-component">
        <MenuComponent {...props} />
        <div className="starOne" />
        <div className="starTwo" />
        <div className="starThree" />

        {loading && (
          <div className="container-spin">
            <Spin tip="Loading..." size="large" />
          </div>
        )}
        {!loading && (
          <ListComponent
            {...props}
            getData={getData}
            paginate={paginate}
            type="films"
            data={data.results}
            total={data.count}
            classType="red"
          />
        )}
      </div>
    );
  };

  return <>{render()}</>;
};

const mapStateToProps = state => {
  const { starwars } = state;

  return {
    loading: starwars.loading,
    data: starwars.data,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...StarwarsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Films);
