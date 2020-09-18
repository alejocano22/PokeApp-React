export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';
export const FETCH_SPECIES_REQUEST = 'FETCH_SPECIES_REQUEST';
export const FETCH_SPECIES_SUCCESS = 'FETCH_SPECIES_SUCCESS';
export const FETCH_SPECIES_ERROR = 'FETCH_SPECIES_ERROR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const IS_COMPARING = 'IS_COMPARING';
export const IS_NOT_COMPARING = 'IS_NOT_COMPARING';


export const fetchPokemon = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_POKEMON_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_POKEMON_SUCCESS,
        payload: {
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          id: pokemon.id
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_POKEMON_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const fetchSpecies = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_SPECIES_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_SPECIES_SUCCESS,
        payload: {
          description: pokemon.flavor_text_entries.filter(entry => entry.language.name === 'en')[0].flavor_text,
          genderRate: pokemon.gender_rate
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_SPECIES_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const openModal = () => (dispatch) =>{
  dispatch({
    type: OPEN_MODAL,
    payload: {
      isActive: true
    }
  })
}

export const closeModal = () => (dispatch) =>{
  dispatch({
    type: CLOSE_MODAL,
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