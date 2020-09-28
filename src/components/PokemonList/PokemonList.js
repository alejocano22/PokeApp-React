import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPokemonList, savePokemon, saveSpecies, updateCurrentPokemonIndex, updateComparisonPokemonIndex } from '../../redux/actions/pokemonListActions';
import { showCurrentPokemonModal} from '../../redux/actions/pokemonCardActions';
import { showComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions';
import { pokemonImagesUrl, speciesApiUrl } from '../../utils'
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import PokemonComparison from '../PokemonComparison';
import PokemonComparisonBox from '../PokemonComparison/PokemonComparisonBox';
import styles from './pokemonList.module.css';

let isEmpty = true;

const PokemonList = (props) => { 
  const getPokemonList = (() => {
    props.fetchPokemonList(props.pokemonList.next); 
  })

  const searchIndexInPokemonFetched = (name) => (props.pokemonList.pokemonFetched.findIndex((pokemon) => (pokemon.name === name)));

  const clickOnPokemon = (url, name) => {
    let indexPokeFetched = searchIndexInPokemonFetched(name);
    if(indexPokeFetched === -1){
      props.savePokemon(url);
      props.saveSpecies(speciesApiUrl + name);
      indexPokeFetched = props.pokemonList.pokemonFetched.length;
    }
    if (props.currentPokemon.isComparing) {
      props.updateComparisonPokemonIndex(indexPokeFetched);
      props.showComparisonPokemonModal(true);
    } else {
      props.updateCurrentPokemonIndex(indexPokeFetched);
      props.showCurrentPokemonModal(true);
    }
  }

  if (isEmpty) {
    getPokemonList();
    isEmpty = false;
  }

  return(  
    <div>
      <PokemonCard/>
      <PokemonComparison/>
      <Header hiddenSearch={ false }/>
      <PokemonComparisonBox/>
      <InfiniteScroll
        dataLength={ props.pokemonList.pokemonList.length }
        next={ getPokemonList }
        hasMore={ true }
        className={ styles['scroll'] } 
      >
        <div className={ styles['pokemon'] }>
          <h1 className={styles['list-title'] }>List of Pokémon</h1>
          <ul className={ styles['pokemon-list'] }>
            { props.pokemonList.pokemonList.filter(pokeFilter => pokeFilter.name.includes(props.header.search)).map((pokemon, index) => (
              <li key={ index } className={ styles['pokemon-item'] } onClick={ () => (clickOnPokemon(pokemon.url, pokemon.name)) }>
                <img
                  src={ pokemonImagesUrl + (props.pokemonList.pokemonList.indexOf(pokemon) + 1) + ".png?raw=true" }
                  alt={ pokemon.name }
                  className={ styles['pokemon-image'] }>
                </img>
                <h2 className={ styles['pokemon-name'] }>{ pokemon.name.toUpperCase() }</h2>
              </li>
            )) }
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
    savePokemon: (url) => dispatch(savePokemon(url)),
    saveSpecies: (url) => dispatch(saveSpecies(url)),
    updateCurrentPokemonIndex: (index) => dispatch(updateCurrentPokemonIndex(index)),
    updateComparisonPokemonIndex: (index) => dispatch(updateComparisonPokemonIndex(index)),
    showCurrentPokemonModal: (active) => dispatch(showCurrentPokemonModal(active)),
    showComparisonPokemonModal: (active) => dispatch(showComparisonPokemonModal(active)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);