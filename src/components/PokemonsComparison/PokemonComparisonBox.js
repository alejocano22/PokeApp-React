import React from 'react';
import './pokemonCard.css'
import { connect } from 'react-redux';
import style from './pokemonList.module.css';

const PokemonComparisonBox = (props) =>{
  let currentPokemonName = '';
  if(props.currentPokemon.isComparing){
    currentPokemonName = props.currentPokemon.name;
  }  
  if(props.currentPokemon.isComparing){
    return(  
      <div className={style['compare-pokemon-box']}>
        <h4 className={style['compare-pokemon']}>Comparing pokemon...</h4>
        <h5 className={style['compare-pokemon']}>{currentPokemonName}</h5>
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