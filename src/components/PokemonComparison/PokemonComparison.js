import React from 'react';
import { connect } from 'react-redux';

import { closeComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions'
import { isNotComparing } from '../../redux/actions/pokemonCardActions'
import styles from './pokemonComparison.module.css';

const PokemonComparison = (props) =>{

  const handleClose = () => {
    props.closeComparisonPokemonModal();
    props.isNotComparing();
  }

  const handleProp = (event) => {
    event.stopPropagation();
  }

  if(props.comparisonPokemon.isActive){
    return(  
      <div className={styles['modal']} onClick={handleClose}>
        <div className={styles['card']} onClick={handleProp}>
          <h1 className={styles['card-title']}>{props.currentPokemon.name.toUpperCase()}</h1>
          <div className='img-comp'>
            <img
              className={styles['card-image']}
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.currentPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
            <h1>Vs</h1>
            <img
              className={styles['card-image']}
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.comparisonPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
          </div>
          
          <h1 className={styles['card-title']}>{props.comparisonPokemon.name.toUpperCase()}</h1>
        </div>
      </div>
    )
  }else{
    return null;
  }



}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeComparisonPokemonModal: () => dispatch(closeComparisonPokemonModal()),
    isNotComparing: () => dispatch(isNotComparing()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonComparison);