import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSearch } from '../../redux/actions/headerAction';
import pokeIcon from '../../images/pokeIcon.png'
import styles from './header.module.css';

const Header = ({updateSearch, hiddenSearch}) =>{

  const handleOnChange = (event) =>{
    const pokemonName = event.target.value;
    updateSearch(pokemonName)
  }

  return(
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
        <NavLink to='/pokemons' className={styles['link']} activeClassName={styles['active-link']}>Pokemons</NavLink>
        <form className={styles['search-form']}>
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
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (search) => dispatch(updateSearch(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);