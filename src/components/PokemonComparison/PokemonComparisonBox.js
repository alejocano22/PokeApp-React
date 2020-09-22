import React from 'react';
import { connect } from 'react-redux';
import styles from './pokemonComparisonBox.module.css';

const PokemonComparisonBox = (props) =>{

  let currentPokemonName = '';
  
  if(props.currentPokemon.isComparing){
    currentPokemonName = props.currentPokemon.name;
  }

  if(props.currentPokemon.isComparing){
    return(  
      <div className={styles['compare-pokemon-box']}>
        <h3 className={styles['compare-pokemon-box-title']}>Comparing pokemon...</h3>
        <h4 className={styles['compare-pokemon']}>{currentPokemonName.toUpperCase()}</h4>
      </div>
    )
  }else{
    return null;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PokemonComparisonBox);