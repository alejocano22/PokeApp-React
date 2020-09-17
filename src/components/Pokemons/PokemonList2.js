import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/pokemonActions2'
import { fetchCurrentPokemon, openModal } from '../../redux/actions/currentPokemonActions'
import './pokemon.css'

const Pokemon = (props) =>{

  const click = (url) => {
    props.fetchCurrentPokemon(url);
    props.openModal();
    console.log(url)
  }

  const getPokemon = (() =>{
      props.fetchPokemon(props.pokemon2.next)
  })
  return(  
    <div>
      {console.log('Me renderice!')}
      {console.log(props)}
      <ul className='pokemonList'>
        {props.pokemon2.pokemons.filter(poke => poke.name.includes(props.search.search)).map((pokemon, index) =>(
          <li key={index} className='pokemon' onClick={()=>(click(pokemon.url))}>
            <img
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.pokemon2.pokemons.indexOf(pokemon)+1)+".png?raw=true"}
              alt={pokemon.name}>
            </img>
            {props.pokemon2.pokemons.indexOf(pokemon)+1} - {pokemon.name}
          </li>
        ))}
      </ul>
      <button
        onClick={ getPokemon }
        className='load'
      >Load pokemons</button>     
    </div>
  )
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: (url) => dispatch(fetchPokemon(url)),
    fetchCurrentPokemon: (url) => dispatch(fetchCurrentPokemon(url)),
    openModal: () => dispatch(openModal())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);