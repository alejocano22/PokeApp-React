import React from 'react';
import { connect } from 'react-redux';
import { showComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions';
import { isComparing } from '../../redux/actions/pokemonCardActions';
import { pokemonImagesUrl, getGender } from '../../utils';
import Chart from '../Chart';
import styles from './pokemonComparison.module.css';

const PokemonComparison = (props) =>{

  const handleCloseModal = () => {
    props.showComparisonPokemonModal(false);
    props.isComparing(false);
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }

  if(props.comparisonPokemon.isActive){
    const CurrentPokemonGender = getGender(props.currentPokemon.genderRate);
    const ComparisonPokemonGender = getGender(props.comparisonPokemon.genderRate);
    return(  
      <div className={styles['comparison-modal']} onClick={handleCloseModal}>
        <div className={styles['comparison-card']} onClick={handlePropagation}>
          <div className={styles['pokemon-header']}>
            <button className={styles['close-button']}onClick={handleCloseModal}>X</button>
            <h2 className={styles['pokemon-name']}>{props.currentPokemon.name.toUpperCase()} vs. {props.comparisonPokemon.name.toUpperCase()}</h2>
          </div>
          <div className={styles['pokemon-information']}>
            <div className={styles['pokemon-images']}>
              <img
                className={styles['card-image']}
                src= {pokemonImagesUrl+(props.currentPokemon.id)+".png?raw=true"}
                alt={props.currentPokemon.id}>
              </img> 
              <img
                className={styles['card-image']}
                src= {pokemonImagesUrl+(props.comparisonPokemon.id)+".png?raw=true"}
                alt={props.currentPokemon.id}>
              </img>
            </div>
            <div className={styles['pokemon-details']}>
              <h4 className={styles['pokemon-detail-description']}>{CurrentPokemonGender}</h4>
              <h3 className={styles['pokemon-detail-title']}>Gender</h3>
              <h4 className={styles['pokemon-detail-description']}>{ComparisonPokemonGender}</h4>
              <h4 className={styles['pokemon-detail-description']}>{props.currentPokemon.height}</h4>
              <h3 className={styles['pokemon-detail-title']}>Height</h3>
              <h4 className={styles['pokemon-detail-description']}>{props.comparisonPokemon.height}</h4>  
              <h4 className={styles['pokemon-detail-description']}>{props.currentPokemon.weight}</h4>
              <h3 className={styles['pokemon-detail-title']}>Weight</h3>
              <h4 className={styles['pokemon-detail-description']}>{props.comparisonPokemon.weight}</h4>
              <ul className={styles['pokemon-detail-list']}> 
                {props.currentPokemon.abilities.map((ability, index)=>(
                  <li className={styles['pokemon-detail-description']} key={index}>{ability.ability.name}</li>
                ))}
              </ul>
              <h3 className={styles['pokemon-detail-title']}>Abilities</h3>
              <ul className={styles['pokemon-detail-list']}> 
                {props.comparisonPokemon.abilities.map((ability, index)=>(
                  <li className={styles['pokemon-detail-description']} key={index}>{ability.ability.name}</li>
                ))}
              </ul>   
            </div>
          </div> 
          <div className={styles['pokemon-stats']}>
            <Chart/>
          </div> 
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
    showComparisonPokemonModal: (active) => dispatch(showComparisonPokemonModal(active)),
    isComparing: (compare) => dispatch(isComparing(compare)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonComparison);