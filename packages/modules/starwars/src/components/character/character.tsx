import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';
import { bindActionCreators } from 'redux';

import ListComponent from '../../core/components/list/list';
import MenuComponent from '../../core/components/menu/menu';
import { StarwarsActions } from '../../core/store';

import './character.scss';

const Character = props => {
  const [paginate, setPaginate] = useState('');
  const { getDataApi, dataPeople, loading } = props;

  useEffect(() => {
    getCharacter({
      type: 'people',
      pageSize: 10,
      currentPage: 1,
      searchText: '',
    });
  }, []);

  const getCharacter = params => {
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
            getData={getCharacter}
            paginate={paginate}
            type="people"
            data={dataPeople.results}
            total={dataPeople.count}
            classType="yellow"
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
    dataPeople: starwars.data,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...StarwarsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Character);
