import React from 'react';
import { connect } from 'react-redux';
import './header.css'
import { updateSearch } from '../../redux/actions/headerAction';
import { NavLink } from 'react-router-dom'

const Header = ({currentPokemon, updateSearch}) =>{

  const handleOnChange = (event) =>{
    const pokemonName = event.target.value;
    updateSearch(pokemonName)
  }
  
  let currentPokemonName = '';
  if(currentPokemon.isComparing){
    currentPokemonName = currentPokemon.name;
  }

  return(
    <nav className='header'>
      <NavLink to='/' exact activeClassName=''>
        <img
          className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
          alt="pokeball"
        ></img>
        <h1 className='title'>PokéApp</h1>
      </NavLink>
      <NavLink to='/pokemons' activeClassName=''>Pokemons</NavLink>
      <form>
        <input
          className='search'
          type='text'
          placeholder='search'
          onChange={handleOnChange}
        ></input>
      </form>
      <h1>{currentPokemonName}</h1>
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