import React from 'react';
import { connect } from 'react-redux';
import { closeCurrentPokemonModal, isComparing } from '../../redux/actions/pokemonCardActions';
import { pokemonImagesUrl } from '../../utils';
import Chart from '../Chart';
import styles from './pokemonCard.module.css';

const PokemonCard = (props) =>{

  const handleCloseModal = () => {
    props.closeCurrentPokemonModal();
  }
  
  const comparePokemon = () => {
    props.isComparing();
    props.closeCurrentPokemonModal();
  }

  const handlePropagation = (event) => {
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
      <div className={styles['pokemon-modal']} onClick={handleCloseModal}>
        <div className={styles['pokemon-card']} onClick={handlePropagation}>
          <div className={styles['pokemon-header']}>
            <button className={styles['close-button']}onClick={handleCloseModal}>X</button>
            <h2 className={styles['pokemon-name']}>{props.currentPokemon.name.toUpperCase()}</h2>
            <button className={styles['compare-button']} onClick={comparePokemon}>Compare to...</button>
          </div>
          <div className={styles['pokemon-information']}>
            <img
              className={styles['card-image']}
              src= {pokemonImagesUrl+(props.currentPokemon.id)+".png?raw=true"}
              alt={props.currentPokemon.id}>
            </img> 
            <div>
              <p className={styles['pokemon-description']}>{props.currentPokemon.description}</p>
              <div className={styles['pokemon-details']}>
                <div className={styles['pokemon-detail-item']}>
                  <h3 className={styles['pokemon-detail-title']}>Gender</h3>
                  <h4 className={styles['pokemon-detail-description']}>{gender}</h4>
                </div>
                <div className={styles['pokemon-detail-item']}>
                  <h3 className={styles['pokemon-detail-title']}>Height</h3>
                  <h4 className={styles['pokemon-detail-description']}>{props.currentPokemon.height}</h4>
                </div>
                <div className={styles['pokemon-detail-item']}>
                  <h3 className={styles['pokemon-detail-title']}>Weight</h3>
                  <h4 className={styles['pokemon-detail-description']}>{props.currentPokemon.weight}</h4>
                </div>
                <div className={styles['pokemon-detail-item']}>
                  <h3 className={styles['pokemon-detail-title']}>Types</h3>
                  <ul className={styles['pokemon-detail-list']}> 
                    {props.currentPokemon.types.map((type, index)=>(
                      <li className={styles['pokemon-detail-description']} key={index}>{type.type.name}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles['pokemon-detail-item']}>
                  <h3 className={styles['pokemon-detail-title']}>Abilities</h3>
                  <ul className={styles['pokemon-detail-list']}> 
                    {props.currentPokemon.abilities.map((ability, index)=>(
                      <li className={styles['pokemon-detail-description']} key={index}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['pokemon-stats']}>
            <Chart/>
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