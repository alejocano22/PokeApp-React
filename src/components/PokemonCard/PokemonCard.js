import React from 'react';
import { connect } from 'react-redux';
import './pokemonCard.css'
import { closeModal, isComparing } from '../../redux/actions/pokemonCardActions'

const PokemonCard = (props) =>{

  const handleClose = () => {
    props.closeModal();
  }
  
  const compare = () => {
    console.log('comparing...')
    props.isComparing();
    props.closeModal();
  }

  const handleProp = (event) => {
    event.stopPropagation();
  }
  

  if(props.currentPokemon.isActive){
    let gender = 'Genderless';
    if(props.currentPokemon.genderRate >= 4 ){
      gender = 'Female';
    }else if (props.currentPokemon.genderRate >= 0){
      gender = 'Male';
    }
    return(  
      <div className='modal' onClick={handleClose}>
        <div className='card' onClick={handleProp}>
          <h1 className='card-title'>{props.currentPokemon.name.toUpperCase()}</h1>
          <button className='compare-button' onClick={compare}>Compare to...</button>
          <div className='information'>
            <img
              className='card-image'
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.currentPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
            <div>
              <p>{props.currentPokemon.description}</p>
              <h4>Gender: {gender}</h4>
              <h4>Height: {props.currentPokemon.height}</h4>
              <h4>Weight: {props.currentPokemon.weight}</h4> 
              <h4>Gender: Indefinido</h4> 
              <h4>Abilities: Indefinido</h4> 
              <h4>Type: Indefinido</h4> 
              <h4>Id: {props.currentPokemon.id}</h4> 
            </div>
          </div>
          
          
          
          <button onClick={handleClose}>Close</button>  
        </div>
      </div>
    )
  }else{
    return(
      null
    )
  }

  
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    isComparing: () => dispatch(isComparing())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);