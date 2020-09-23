import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPokemonList } from '../../redux/actions/pokemonListActions';
import { fetchCurrentPokemon, fetchCurrentSpecies, openCurrentPokemonModal } from '../../redux/actions/pokemonCardActions';
import { fetchComparisonPokemon, fetchComparisonSpecies, openComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions';
import { pokemonImagesUrl, speciesApiUrl } from '../../utils'
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import PokemonComparison from '../PokemonComparison';
import PokemonComparisonBox from '../PokemonComparison/PokemonComparisonBox';
import styles from './pokemonList.module.css';

let isEmpty = true;

const PokemonList = (props) =>{ 

  const getPokemonList = (() =>{
    props.fetchPokemonList(props.pokemonList.next); 
  })

  const clickOnPokemon = (url, name) => {
    if(!props.currentPokemon.isComparing){
      props.fetchCurrentPokemon(url);
      props.fetchCurrentSpecies(speciesApiUrl+name)
      props.openCurrentPokemonModal();
    }else{
      props.fetchComparisonPokemon(url);
      props.fetchComparisonSpecies(speciesApiUrl+name);
      props.openComparisonPokemonModal();
    }
  }

  if(isEmpty){
    getPokemonList();
    isEmpty = false;
  }

  return(  
    <div>
      <PokemonCard/>
      <PokemonComparison/>
      <Header hiddenSearch={false}/>
      <PokemonComparisonBox/>
      <InfiniteScroll
        dataLength={props.pokemonList.pokemonList.length}
        next={getPokemonList}
        hasMore={true}
        className={styles['scroll']}
      >
        <div className={styles['pokemon']}>
          <h1 className={styles['list-title']}>List of Pokémon</h1>
          <ul className={styles['pokemon-list']}>
            {props.pokemonList.pokemonList.filter(poke => poke.name.includes(props.header.search)).map((pokemon, index) =>(
              <li key={index} className={styles['pokemon-item']} onClick={()=>(clickOnPokemon(pokemon.url, pokemon.name))}>
                <img
                  src= {pokemonImagesUrl+(props.pokemonList.pokemonList.indexOf(pokemon)+1)+".png?raw=true"}
                  alt={pokemon.name}>
                </img>
                <h2 className={styles['pokemon-name']}>{pokemon.name.toUpperCase()}</h2>
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