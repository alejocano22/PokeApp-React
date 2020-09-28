import React from 'react';
import { connect } from 'react-redux';
import { showComparisonPokemonModal } from '../../redux/actions/pokemonComparisonActions';
import { isComparing } from '../../redux/actions/pokemonCardActions';
import { pokemonImagesUrl, getGender } from '../../utils';
import Chart from '../Chart';
import styles from './pokemonComparison.module.css';

const PokemonComparison = (props) => {
  const { currentPokemonIndex, comparisonPokemonIndex } = props.pokemonList;
  const currentPokemon = props.pokemonList.pokemonFetched[currentPokemonIndex];
  const currentSpecies = props.pokemonList.speciesFetched[currentPokemonIndex];
  const comparisonPokemon = props.pokemonList.pokemonFetched[comparisonPokemonIndex];
  const comparisonSpecies = props.pokemonList.speciesFetched[comparisonPokemonIndex];

  const handleCloseModal = () => {
    props.showComparisonPokemonModal(false);
    props.isComparing(false);
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }

  if (props.comparisonPokemon.isActive && currentPokemon && comparisonPokemon && currentSpecies && comparisonSpecies) {
    const CurrentPokemonGender = getGender(currentPokemon.genderRate);
    const ComparisonPokemonGender = getGender(comparisonPokemon.genderRate);
    const pokemonDetailTitle = ['Gender', 'Height', 'Weight'];
    const CurrentPokemonDetailItem = [CurrentPokemonGender, currentPokemon.height, currentPokemon.weight];
    const ComparisonPokemonDetailItem = [ComparisonPokemonGender, comparisonPokemon.height, comparisonPokemon.weight];
    return(  
      <div className={ styles['comparison-modal'] } onClick={ handleCloseModal }>
        <div className={ styles['comparison-card'] } onClick={ handlePropagation }>
          <div className={ styles['pokemon-header'] }>
            <button className={ styles['close-button'] } onClick={ handleCloseModal }>X</button>
            <h2 className={ styles['pokemon-name'] }>{ currentPokemon.name.toUpperCase() } vs. { comparisonPokemon.name.toUpperCase() }</h2>
          </div>
          <div className={ styles['pokemon-information'] }>
            <div className={ styles['pokemon-images'] }>
              <img
                className={styles['card-image'] }
                src= { pokemonImagesUrl + currentPokemon.id + ".png?raw=true" }
                alt={ currentPokemon.id }>
              </img> 
              <img
                className={ styles['card-image'] }
                src= { pokemonImagesUrl + comparisonPokemon.id + ".png?raw=true" }
                alt={ currentPokemon.id }>
              </img>
            </div>
            <div className={ styles['pokemon-details'] }>
              { pokemonDetailTitle.map((title, index) => (
                <div className={ styles['pokemon-detail-item'] } key={ index }>
                  <h4 className={ styles['pokemon-detail-description'] }>{ CurrentPokemonDetailItem[index] }</h4>
                  <h3 className={ styles['pokemon-detail-title'] }>{ title }</h3>
                  <h4 className={ styles['pokemon-detail-description'] }>{ ComparisonPokemonDetailItem[index] }</h4>
                </div>
              )) }
              <div className={ styles['pokemon-detail-item'] }>
                <ul className={ styles['pokemon-detail-list'] }> 
                  { currentPokemon.abilities.map((ability, index) => (
                    <li className={ styles['pokemon-detail-description']} key={ index }>{ ability.ability.name }</li>
                  )) }
                </ul>
                <h3 className={ styles['pokemon-detail-title'] }>Abilities</h3>
                <ul className={ styles['pokemon-detail-list'] }> 
                  { comparisonPokemon.abilities.map((ability, index) => (
                    <li className={ styles['pokemon-detail-description'] } key={ index }>{ ability.ability.name }</li>
                  )) }
                </ul>   
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