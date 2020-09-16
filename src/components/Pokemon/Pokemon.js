import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/pokemonActions'

const Pokemon = (props) =>{
  
  const click = () => {
    props.dispatch(
      fetchPokemon()
    )
  }
  return(
    <div>
      <h2>Pokemon</h2>
      <button
        onClick={click}
      >Load pokemons</button>
      <h1>
        Name: { props.pokemon.pokemon.name }
      </h1>
      <h2>id: { props.pokemon.pokemon.id } </h2>
      <img 
        src="https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/22.png?raw=true"
        alt={props.pokemon.pokemon.name}>
      </img>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state);

  return state;
}


export default connect(mapStateToProps)(Pokemon);