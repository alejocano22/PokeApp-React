import { fetchPokemon, fetchSpecies } from '../../utils';
export const FETCH_COMPARISON_POKEMON_REQUEST = 'FETCH_COMPARISON_POKEMON_REQUEST';
export const FETCH_COMPARISON_POKEMON_SUCCESS = 'FETCH_COMPARISON_POKEMON_SUCCESS';
export const FETCH_COMPARISON_POKEMON_ERROR = 'FETCH_COMPARISON_POKEMON_ERROR';
export const FETCH_COMPARISON_SPECIES_REQUEST = 'FETCH_COMPARISON_SPECIES_REQUEST';
export const FETCH_COMPARISON_SPECIES_SUCCESS = 'FETCH_COMPARISON_SPECIES_SUCCESS';
export const FETCH_COMPARISON_SPECIES_ERROR = 'FETCH_COMPARISON_SPECIES_ERROR';
export const OPEN_COMPARISON_POKEMON_MODAL = 'OPEN_COMPARISON_POKEMON_MODAL';
export const CLOSE_COMPARISON_POKEMON_MODAL = 'CLOSE_COMPARISON_POKEMON_MODAL';

export const fetchComparisonPokemon = (url) => async (dispatch) => {
  dispatch({
    type: FETCH_COMPARISON_POKEMON_REQUEST
  })
  const { payload } = await fetchPokemon(url);
  if(payload.error){
    dispatch({
      type: FETCH_COMPARISON_POKEMON_ERROR,
      payload: {
        error: payload.error
      }
    })
  }else{
    dispatch({
      type: FETCH_COMPARISON_POKEMON_SUCCESS,
      payload: payload
    })
  }
}

export const fetchComparisonSpecies = (url) => async (dispatch) => {  
  dispatch({
    type: FETCH_COMPARISON_SPECIES_REQUEST
  })
  const { payload } = await fetchSpecies(url);
  if(payload.error){
    dispatch({
      type: FETCH_COMPARISON_SPECIES_ERROR,
      payload: {
        error: payload.error
      }
    })
  }else{
    dispatch({
      type: FETCH_COMPARISON_SPECIES_SUCCESS,
      payload: payload
    })
  }
}

export const openComparisonPokemonModal = () => (dispatch) =>{
  dispatch({
    type: OPEN_COMPARISON_POKEMON_MODAL,
    payload: {
      comparison: true
    }
  })
}

export const closeComparisonPokemonModal = () => (dispatch) =>{
  dispatch({
    type: CLOSE_COMPARISON_POKEMON_MODAL,
    payload: {
      comparison: false
    }
  })
}