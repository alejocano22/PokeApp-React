import React from 'react';
import { connect } from 'react-redux';
import './pokemonCard.css'
import { closeCurrentPokemonModal, isComparing } from '../../redux/actions/pokemonCardActions'

const PokemonCard = (props) =>{

  const handleClose = () => {
    props.closeCurrentPokemonModal();
  }
  
  const compare = () => {
    console.log('comparing...')
    props.isComparing();
    props.closeCurrentPokemonModal();
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
          <h1 className='card-title'>{props.currentPokemon.name.toUpperCase()}<button onClick={handleClose}>X</button>  </h1>
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
              <h4>Type</h4>
              <ul> 
                {props.currentPokemon.types.map((type, index)=>(
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
              <h4>Type</h4>
              <ul> 
                {props.currentPokemon.abilities.map((ability, index)=>(
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
              <h4>Stats</h4>
              <ul> 
                {props.currentPokemon.stats.map((stat, index)=>(
                  <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
              </ul>
            </div>
          </div>
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
    closeCurrentPokemonModal: () => dispatch(closeCurrentPokemonModal()),
    isComparing: () => dispatch(isComparing())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);