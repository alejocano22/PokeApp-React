import React from 'react';
import { connect } from 'react-redux';
import { showCurrentPokemonModal, isComparing } from '../../redux/actions/pokemonCardActions';
import { pokemonImagesUrl, getGender } from '../../utils';
import Chart from '../Chart';
import styles from './pokemonCard.module.css';

const PokemonCard = (props) =>{

  const handleCloseModal = () => {
    props.showCurrentPokemonModal(false);
  }
  
  const comparePokemon = () => {
    props.isComparing(true);
    props.showCurrentPokemonModal(false);
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }
  
  if(props.currentPokemon.isActive){
    const gender = getGender(props.currentPokemon.genderRate);
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
    showCurrentPokemonModal: (active) => dispatch(showCurrentPokemonModal(active)),
    isComparing: (compare) => dispatch(isComparing(compare)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);