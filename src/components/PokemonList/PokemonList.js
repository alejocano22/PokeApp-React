import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import store from '../../redux/store';
import { fetchPokemonList } from '../../redux/actions/pokemonListActions';
import { fetchCurrentPokemon, fetchCurrentSpecies, openCurrentPokemonModal } from '../../redux/actions/pokemonCardActions';
import { fetchComparisonPokemon, fetchComparisonSpecies, openComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import PokemonsComparison from '../PokemonsComparison';
import PokemonComparisonBox from '../PokemonsComparison/PokemonComparisonBox'
import style from './pokemonList.module.css';

const PokemonList = (props) =>{

  const click = (url, name) => {
    if(!props.currentPokemon.isComparing){
      props.fetchCurrentPokemon(url);
      props.fetchCurrentSpecies('https://pokeapi.co/api/v2/pokemon-species/'+name)
      props.openCurrentPokemonModal();
    }else{
      props.fetchComparisonPokemon(url);
      props.fetchComparisonSpecies('https://pokeapi.co/api/v2/pokemon-species/'+name);
      props.openComparisonPokemonModal();
    }
  }

  useEffect(()=>{
    console.log('En use Efect')
    store.dispatch(fetchPokemonList('https://pokeapi.co/api/v2/pokemon/'))
  },[])

  const getPokemon = (() =>{
    props.fetchPokemonList(props.pokemonList.next) 
  })
  
  return(  
    <div>
      <PokemonCard/>
      <PokemonsComparison/>
      <Header hiddenSearch={false}/>
      <PokemonComparisonBox/>
      <InfiniteScroll
        dataLength={props.pokemonList.pokemons.length}
        next={getPokemon}
        hasMore={true}
        endMessage={
          <p className={style['end-message']}>Yay! You have seen it all</p>
        }
        className={style['scroll']}
      >
        <div className={style['pokemons']}>
          <ul className={style['pokemonList']}>
            {props.pokemonList.pokemons.filter(poke => poke.name.includes(props.search.search)).map((pokemon, index) =>(
              <li key={index} className={style['pokemon']} onClick={()=>(click(pokemon.url, pokemon.name))}>
                <img
                  src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.pokemonList.pokemons.indexOf(pokemon)+1)+".png?raw=true"}
                  alt={pokemon.name}>
                </img>
                <h3 className={style['pokemon-name']}>{pokemon.name.toUpperCase()}</h3>
              </li>
            ))}
          </ul>  
        </div>
      </InfiniteScroll>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemonList: (url) => dispatch(fetchPokemonList(url)),
    fetchCurrentPokemon: (url) => dispatch(fetchCurrentPokemon(url)),
    fetchCurrentSpecies: (url) => dispatch(fetchCurrentSpecies(url)),
    openCurrentPokemonModal: () => dispatch(openCurrentPokemonModal()),
    fetchComparisonPokemon: (url) => dispatch(fetchComparisonPokemon(url)),
    fetchComparisonSpecies: (url) => dispatch(fetchComparisonSpecies(url)),
    openComparisonPokemonModal: () => dispatch(openComparisonPokemonModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);