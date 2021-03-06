import React from 'react';
import { connect } from 'react-redux';
import { showCurrentPokemonModal, isComparing } from '../../redux/actions/pokemonCardActions';
import { pokemonImagesUrl, getGender } from '../../utils';
import Chart from '../Chart';
import styles from './pokemonCard.module.css';

const PokemonCard = (props) => {
  const { currentPokemonIndex } = props.pokemonList;
  const currentPokemon = props.pokemonList.pokemonFetched[currentPokemonIndex];
  const currentSpecies = props.pokemonList.speciesFetched[currentPokemonIndex];

  const handleCloseModal = () => {
    props.showCurrentPokemonModal();
  }
  
  const comparePokemon = () => {
    props.isComparing();
    props.showCurrentPokemonModal();
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }
  
  if (props.currentPokemon.isActive && currentPokemon && currentSpecies) {
    const gender = getGender(currentSpecies.genderRate);
    const pokemonDetailTitle = ['Gender', 'Height', 'Weight'];
    const pokemonDetailItem = [gender, currentPokemon.height, currentPokemon.weight];
    return(  
      <div className={ styles['pokemon-modal'] } onClick={ handleCloseModal }>
        <div className={ styles['pokemon-card'] } onClick={ handlePropagation }>
          <div className={ styles['pokemon-header'] }>
            <button className={ styles['close-button'] } onClick={ handleCloseModal }>X</button>
            <h2 className={ styles['pokemon-name'] }>{ currentPokemon.name.toUpperCase() }</h2>
            <button className={ styles['compare-button'] } onClick={ comparePokemon }>Compare to...</button>
          </div>
          <div className={ styles['pokemon-information'] }>
            <img
              className={ styles['card-image'] }
              src= { pokemonImagesUrl + currentPokemon.id + ".png?raw=true" }
              alt={ currentPokemon.id }>
            </img> 
            <div>
              <p className={ styles['pokemon-description'] }>{ currentSpecies.description }</p>
              <div className={ styles['pokemon-details'] }>
                { pokemonDetailItem.map((item, index) => (
                <div className={ styles['pokemon-detail-item'] } key={ index }>
                  <h3 className={ styles['pokemon-detail-title'] }>{ pokemonDetailTitle[index] }</h3>
                  <h4 className={ styles['pokemon-detail-description'] }>{ item }</h4>
                </div>
                )) }
                <div className={ styles['pokemon-detail-item'] }>
                  <h3 className={ styles['pokemon-detail-title'] }>Types</h3>
                  <ul className={ styles['pokemon-detail-list'] }> 
                    { currentPokemon.types.map((type, index) => (
                      <li className={ styles['pokemon-detail-description'] } key={ index }>{ type.type.name }</li>
                    )) }
                  </ul>
                </div>
                <div className={ styles['pokemon-detail-item'] }>
                  <h3 className={ styles['pokemon-detail-title'] }>Abilities</h3>
                  <ul className={ styles['pokemon-detail-list'] }> 
                    {currentPokemon.abilities.map((ability, index) => (
                      <li className={ styles['pokemon-detail-description'] } key={ index }>{ ability.ability.name }</li>
                    )) }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={ styles['pokemon-stats'] }>
            <Chart/>
          </div>
        </div>
      </div>
    )
  } else {
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
    showCurrentPokemonModal: () => dispatch(showCurrentPokemonModal()),
    isComparing: () => dispatch(isComparing()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);