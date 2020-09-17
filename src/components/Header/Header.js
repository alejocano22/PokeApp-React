import React from 'react';
import { connect } from 'react-redux';
import './header.css'
import { updateSearch } from '../../redux/actions/headerAction'

const Header = ({pokemon, updateSearch}) =>{

  const handleOnChange = (event) =>{
    const pokemonName = event.target.value;
    // console.log(pokemonName);
    // console.log('------');
    
    // console.log(pokemon.pokemon) //Array
    // pokemon.pokemon
    //   .filter(poke => poke.name.includes(pokemonName))
    //   .map(pokee => (console.log(pokee.name))

    // )
    updateSearch(pokemonName)
  }
  
  return(
    <div>
      <div className='header'>
        <img
          className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
          alt="pokeball"
        ></img>
        <h1 className='title'>Pokemon App</h1>
        <form>
          <input
            className='search'
            type='text'
            placeholder='search'
            onChange={handleOnChange}
          ></input>
        </form>
      </div>
    </div>
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