import React from 'react';
import { connect } from 'react-redux';
import styles from './pokemonComparisonBox.module.css';

const PokemonComparisonBox = (props) => {
  const { currentPokemonIndex } = props.pokemonList;
  const currentPokemon = props.pokemonList.pokemonFetched[currentPokemonIndex]; 

  if (props.currentPokemon.isComparing && currentPokemon) {
    const name = currentPokemon.name;
    return(  
      <div className = { styles['compare-pokemon-box'] }>
        <h3 className = { styles['compare-pokemon-box-title'] } >Comparing pokemon...</h3>
        <h4 className = { styles['compare-pokemon'] }>{ name.toUpperCase() }</h4>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PokemonComparisonBox);