import { fetchPokemon, fetchSpecies } from '../../utils';
export const FETCH_CURRENT_POKEMON_REQUEST = 'FETCH_CURRENT_POKEMON_REQUEST';
export const FETCH_CURRENT_POKEMON_SUCCESS = 'FETCH_CURRENT_POKEMON_SUCCESS';
export const FETCH_CURRENT_POKEMON_ERROR = 'FETCH_CURRENT_POKEMON_ERROR';
export const FETCH_CURRENT_SPECIES_REQUEST = 'FETCH_CURRENT_SPECIES_REQUEST';
export const FETCH_CURRENT_SPECIES_SUCCESS = 'FETCH_CURRENT_SPECIES_SUCCESS';
export const FETCH_CURRENT_SPECIES_ERROR = 'FETCH_CURRENT_SPECIES_ERROR';
export const SHOW_CURRENT_POKEMON_MODAL = 'SHOW_CURRENT_POKEMON_MODAL';
export const IS_COMPARING = 'IS_COMPARING';

export const fetchCurrentPokemon = (url) => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_POKEMON_REQUEST
  })
  const { payload } = await fetchPokemon(url);
  if(payload.error){
    dispatch({
      type: FETCH_CURRENT_POKEMON_ERROR,
      payload: {
        error: payload.error
      }
    })
  }else{
    dispatch({
      type: FETCH_CURRENT_POKEMON_SUCCESS,
      payload: payload
    })
  }
}

export const fetchCurrentSpecies = (url) => async (dispatch) => {  
  dispatch({
    type: FETCH_CURRENT_SPECIES_REQUEST
  })
  const { payload } = await fetchSpecies(url);
  if(payload.error){
    dispatch({
      type: FETCH_CURRENT_SPECIES_ERROR,
      payload: {
        error: payload.error
      }
    })
  }else{
    dispatch({
      type: FETCH_CURRENT_SPECIES_SUCCESS,
      payload: payload
    })
  }
}

export const showCurrentPokemonModal = (active) => (dispatch) =>{
  dispatch({
    type: SHOW_CURRENT_POKEMON_MODAL,
    payload: {
      isActive: active
    }
  })
}

export const isComparing = (compare) => (dispatch) =>{
  dispatch({
    type: IS_COMPARING,
    payload: {
      isComparing: compare
    }
  })
}