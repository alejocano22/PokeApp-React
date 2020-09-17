import React from 'react';
import { connect } from 'react-redux';
import './pokemon.css'
import { closeModal } from '../../redux/actions/currentPokemonActions'

const PokemonCard = (props) =>{

  const handleClose = () => {
    props.closeModal();
  }


  if(props.currentPokemon.isActive){
    return(  
      <div className='modal' onClick={handleClose}>
        <div className='card'>
          <h1 className='card-title'>{props.currentPokemon.name.toUpperCase()}</h1>
          <div className='information'>
            <img
              className='card-image'
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+(props.currentPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
            <div>
              <h1>Height: {props.currentPokemon.height}</h1>
              <h1>Weight: {props.currentPokemon.weight}</h1> 
              <h1>Gender: Indefinido</h1> 
              <h1>Abilities: Indefinido</h1> 
              <h1>Type: Indefinido</h1> 
              <h1>Id: {props.currentPokemon.id}</h1> 
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
    closeModal: () => dispatch(closeModal())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);