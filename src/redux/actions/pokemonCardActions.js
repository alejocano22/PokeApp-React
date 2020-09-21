import { fetchPokemon, fetchSpecies } from '../../utils';
export const FETCH_CURRENT_POKEMON_REQUEST = 'FETCH_CURRENT_POKEMON_REQUEST';
export const FETCH_CURRENT_POKEMON_SUCCESS = 'FETCH_CURRENT_POKEMON_SUCCESS';
export const FETCH_CURRENT_POKEMON_ERROR = 'FETCH_CURRENT_POKEMON_ERROR';
export const FETCH_CURRENT_SPECIES_REQUEST = 'FETCH_CURRENT_SPECIES_REQUEST';
export const FETCH_CURRENT_SPECIES_SUCCESS = 'FETCH_CURRENT_SPECIES_SUCCESS';
export const FETCH_CURRENT_SPECIES_ERROR = 'FETCH_CURRENT_SPECIES_ERROR';
export const OPEN_CURRENT_POKEMON_MODAL = 'OPEN_CURRENT_POKEMON_MODAL';
export const CLOSE_CURRENT_POKEMON_MODAL = 'CLOSE_CURRENT_POKEMON_MODAL';
export const IS_COMPARING = 'IS_COMPARING';
export const IS_NOT_COMPARING = 'IS_NOT_COMPARING';

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

export const openCurrentPokemonModal = () => (dispatch) =>{
  dispatch({
    type: OPEN_CURRENT_POKEMON_MODAL,
    payload: {
      isActive: true
    }
  })
}

export const closeCurrentPokemonModal = () => (dispatch) =>{
  dispatch({
    type: CLOSE_CURRENT_POKEMON_MODAL,
    payload: {
      isActive: false
    }
  })
}

export const isComparing = () => (dispatch) =>{
  dispatch({
    type: IS_COMPARING,
    payload: {
      isComparing: true
    }
  })
}

export const isNotComparing = () => (dispatch) =>{
  dispatch({
    type: IS_NOT_COMPARING,
    payload: {
      isComparing: false
    }
  })
}