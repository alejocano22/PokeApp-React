import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemonList } from '../../redux/actions/pokemonListActions'
import { fetchPokemon, fetchSpecies ,openModal } from '../../redux/actions/pokemonCardActions'
import { fetchPokemon2, fetchSpecies2 , openModal2 } from '../../redux/actions/pokemonComparisonActions'
import './pokemon.css'

const Pokemon = (props) =>{

  const click = (url, name) => {
    if(!props.currentPokemon.isComparing){
      props.fetchPokemon(url);
      props.fetchSpecies('https://pokeapi.co/api/v2/pokemon-species/'+name)
      props.openModal();
    }else{
      props.fetchPokemon2(url);
      props.fetchSpecies2('https://pokeapi.co/api/v2/pokemon-species/'+name);
      props.openModal2();
    }
    
  }

  const getPokemon = (() =>{
    props.fetchPokemonList(props.pokemonList.next)
  })
  
  return(  
    <div>
      <ul className='pokemonList'>
        {props.pokemonList.pokemons.filter(poke => poke.name.includes(props.search.search)).map((pokemon, index) =>(
          <li key={index} className='pokemon' onClick={()=>(click(pokemon.url, pokemon.name))}>
            <img
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.pokemonList.pokemons.indexOf(pokemon)+1)+".png?raw=true"}
              alt={pokemon.name}>
            </img>
            <h3 className='pokemon-name'>{props.pokemonList.pokemons.indexOf(pokemon)+1} - {pokemon.name}</h3>
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
    fetchPokemonList: (url) => dispatch(fetchPokemonList(url)),
    fetchPokemon: (url) => dispatch(fetchPokemon(url)),
    fetchSpecies: (url) => dispatch(fetchSpecies(url)),
    fetchPokemon2: (url) => dispatch(fetchPokemon2(url)),
    fetchSpecies2: (url) => dispatch(fetchSpecies2(url)),
    openModal2: () => dispatch(openModal2()),
    openModal: () => dispatch(openModal())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);