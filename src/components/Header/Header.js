import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleMobileItems, updateSearch } from '../../redux/actions/headerAction';
import MobileItems from './MobileItems';
import pokeIcon from '../../images/pokeIcon.png';
import styles from './header.module.css';

const Header = ({updateSearch, hiddenSearch, handleMobileItems}) =>{

  const handleOnChange = (event) =>{
    const pokemonName = event.target.value;
    updateSearch(pokemonName);
  }

  const showMobileItems = () => {
    handleMobileItems();
  }

  const prevent = (event) => {
    event.preventDefault();
  }

  return(
    <div className={styles['main-header']}>
      <nav className={styles['header']}>
        <div className={styles['nav-bar']}>
          <NavLink to='/' className={styles['home-link']} activeClassName={styles['active-link']} exact>
            <img
              className={styles['logo']}
              src={pokeIcon}
              alt="poke ball"
            ></img>
            PokéApp
          </NavLink>
          <NavLink to='/pokemon' className={styles['link']} activeClassName={styles['active-link']}>Pokémon</NavLink>
          <form className={styles['search-form']} onSubmit={prevent}>
            <input
              className={styles['search']}
              type='text'
              placeholder='search'
              hidden={hiddenSearch}
              onChange={handleOnChange}
            ></input>
          </form>
        </div>
        <div className={styles['mobile-bar']}>
          <button className={styles["burguer-button"]} onClick={showMobileItems}>
            <span className={styles["burguer-button-bar"]}></span>
            <span className={styles["burguer-button-bar"]}></span>
            <span className={styles["burguer-button-bar"]}></span>
          </button>
          <form className={styles['search-form']} onSubmit={prevent}>
            <input
              className={styles['search']}
              type='text'
              placeholder='search'
              hidden={hiddenSearch}
              onChange={handleOnChange}
            ></input>
          </form>
        </div>
      </nav>
      <MobileItems/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (search) => dispatch(updateSearch(search)),
    handleMobileItems: () => dispatch(handleMobileItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);