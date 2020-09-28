import { fetchPokemon, fetchSpecies } from '../../utils';

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';
export const FETCH_SPECIES_REQUEST = 'FETCH_SPECIES_REQUEST';
export const FETCH_SPECIES_SUCCESS = 'FETCH_SPECIES_SUCCESS';
export const FETCH_SPECIES_ERROR = 'FETCH_SPECIES_ERROR';
export const UPDATE_POKEMON_INDEX = 'UPDATE_POKEMON_INDEX';

export const fetchPokemonList = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_LIST_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_LIST_SUCCESS,
        payload: {
          count: pokemon.count,
          next: pokemon.next,
          previous: pokemon.previous,
          pokemonList: pokemon.results
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_LIST_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const savePokemon = (url) => async (dispatch) => {
  dispatch({
    type: FETCH_POKEMON_REQUEST
  })
  try {
    const { payload } = await fetchPokemon(url);
    dispatch({
      type: FETCH_POKEMON_SUCCESS,
      payload: payload
    })
  } catch (error) {
    dispatch({
      type: FETCH_SPECIES_ERROR,
      payload: {
        error: error.toString()
      }
    })
  }
}

export const saveSpecies = (url) => async (dispatch) => {  
  dispatch({
    type: FETCH_SPECIES_REQUEST
  })

  try {
    const { payload } = await fetchSpecies(url);
    dispatch({
      type: FETCH_SPECIES_SUCCESS,
      payload: payload
    })
  } catch (error) {
    dispatch({
      type: FETCH_SPECIES_ERROR,
      payload: {
        error: error.toString()
      }
    })
  }
}

export const updateCurrentPokemonIndex = (index) => (dispatch) => {
  dispatch({
    type: UPDATE_POKEMON_INDEX,
    payload: {
      currentPokemonIndex: index
    }
  })
}

export const updateComparisonPokemonIndex = (index) => (dispatch) => {
  dispatch({
    type: UPDATE_POKEMON_INDEX,
    payload: {
      comparisonPokemonIndex: index
    }
  })
}