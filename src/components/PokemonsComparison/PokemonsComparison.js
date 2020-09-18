import React from 'react';
import { connect } from 'react-redux';
import './pokemonCard.css'
import { closeModal2 } from '../../redux/actions/pokemonComparisonActions'
import { isNotComparing } from '../../redux/actions/pokemonCardActions'

const PokemonCard = (props) =>{

  const handleClose = () => {
    props.closeModal2();
    props.isNotComparing();
  }

  const handleProp = (event) => {
    event.stopPropagation();
  }

  if(props.comparisonPokemon.comparison){
    return(  
      <div className='modal' onClick={handleClose}>
        <div className='card' onClick={handleProp}>
          <h1 className='card-title'>{props.currentPokemon.name.toUpperCase()}</h1>
          <div className='img-comp'>
            <img
              className='card-image'
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.currentPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
            <h1>Vs</h1>
            <img
              className='card-image'
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.comparisonPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
          </div>
          
          <h1 className='card-title'>{props.comparisonPokemon.name.toUpperCase()}</h1>
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
    closeModal2: () => dispatch(closeModal2()),
    isNotComparing: () => dispatch(isNotComparing()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);