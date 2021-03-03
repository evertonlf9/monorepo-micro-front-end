import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';


import { StarwarsActions } from '../../store';

import './menu.scss';

const MenuComponent = (props) => {
  const [currentPage, setCurrentPage] = useState('');
  const { history } = props;
  const { push } = history;

  useEffect(() => {    
    setCurrentPage(props.match.path);
  }, []);

  const handlerKeyPressNextPage = (e, page) => {
    if(e['keyCode'] === 13) {
        handlerNextPage(page);
      }
  }  
  
  const handlerNextPage = (page) => {
    push(page);
  }  
  
  const render = () => {
    
    return (
        <div id="menu-component">
        <div>
            <div className="dropdown">
                <button className="dropbtn" tabIndex="0">
                    <i className="material-icons" aria-hidden="true">menu</i>
                    <span>Menu</span>
                </button>
                <div className="dropdown-content">
                    <a className="menu-link" onClick={handlerNextPage.bind(this,'/start-wars')} onKeyPress={handlerKeyPressNextPage.bind(this, '/start-wars')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">home</i>
                        <span>Home</span>                    
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/character' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/character')} onKeyPress={handlerKeyPressNextPage.bind(this, '/character')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">emoji_people</i>
                        <span>Personagens</span>                    
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/species' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/species')} onKeyPress={handlerKeyPressNextPage.bind(this, '/species')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">android</i>
                        <span>Species</span>                      
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/planets' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/planets')} onKeyPress={handlerKeyPressNextPage.bind(this, '/planets')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">language</i>
                        <span>Planetas</span>   
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/films' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/films')} onKeyPress={handlerKeyPressNextPage.bind(this, '/films')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">theaters</i>
                        <span>Filmes</span>   
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/vehicles' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/vehicles')} onKeyPress={handlerKeyPressNextPage.bind(this, '/vehicles')} tabIndex="0">
                        <i className="material-icons">time_to_leave</i>
                        <span>Veiculos</span>   
                    </a>
                    <a className={`menu-link-dropdown ${currentPage === '/start-wars/starships' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/starships')} onKeyPress={handlerKeyPressNextPage.bind(this, '/starships')} tabIndex="0">
                        <i className="material-icons" aria-hidden="true">airplanemode_active</i>
                        <span>Naves Estelares</span>  
                    </a>
                </div>
            </div>  
        </div>  
    
        <div className="topnav">
            <a className="menu-link" onClick={handlerNextPage.bind(this,'/start-wars')} onKeyPress={handlerKeyPressNextPage.bind(this, '/start-wars')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">home</i>
                <span>Home</span>
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/character' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/character')} onKeyPress={handlerKeyPressNextPage.bind(this, '/character')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">emoji_people</i>
                <span>Personagens</span> 
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/species' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/species')} onKeyPress={handlerKeyPressNextPage.bind(this, '/species')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">android</i>
                <span>Species</span>   
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/planets' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/planets')} onKeyPress={handlerKeyPressNextPage.bind(this, '/planets')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">language</i>
                <span>Planetas</span> 
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/films' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/films')} onKeyPress={handlerKeyPressNextPage.bind(this, '/films')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">theaters</i>
                <span>Filmes</span> 
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/vehicles' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/vehicles')} onKeyPress={handlerKeyPressNextPage.bind(this, '/vehicles')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">time_to_leave</i>
                <span>Veiculos</span>  
            </a>
            <a className={`menu-link ${currentPage === '/start-wars/starships' ? 'active' : ''}`} onClick={handlerNextPage.bind(this,'/start-wars/starships')} onKeyPress={handlerKeyPressNextPage.bind(this, '/starships')} tabIndex="0">
                <i className="material-icons" aria-hidden="true">airplanemode_active</i>
                <span>Naves Estelares</span>  
            </a>
        </div>
    
        <div className="container-img">
            <img className="section__logo" src="https://image.ibb.co/mnebDS/gdfgdfgdg.png" alt="Logo StarWars The Game" title="“The Force will be with you. Always.” — Obi-Wan Kenobi"/>
        </div>
    </div>
    
    )
  }

  return <>{render()}</>;
}

const mapStateToProps = state => {
  const { starwars } = state;

  return {
    loading: starwars.loading,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...StarwarsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);