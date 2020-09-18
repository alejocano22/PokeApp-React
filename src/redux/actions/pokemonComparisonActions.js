export const FETCH_POKEMON2_REQUEST = 'FETCH_POKEMON2_REQUEST';
export const FETCH_POKEMON2_SUCCESS = 'FETCH_POKEMON2_SUCCESS';
export const FETCH_POKEMON2_ERROR = 'FETCH_POKEMON2_ERROR';
export const FETCH_SPECIES2_REQUEST = 'FETCH_SPECIES2_REQUEST';
export const FETCH_SPECIES2_SUCCESS = 'FETCH_SPECIES2_SUCCESS';
export const FETCH_SPECIES2_ERROR = 'FETCH_SPECIES2_ERROR';
export const OPEN_MODAL2 = 'OPEN_MODAL';
export const CLOSE_MODAL2 = 'CLOSE_MODAL';

export const fetchPokemon2 = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_POKEMON2_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_POKEMON2_SUCCESS,
        payload: {
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          id: pokemon.id
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_POKEMON2_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const fetchSpecies2 = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_SPECIES2_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_SPECIES2_SUCCESS,
        payload: {
          description: pokemon.flavor_text_entries.filter(entry => entry.language.name === 'en')[0].flavor_text,
          genderRate: pokemon.gender_rate
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_SPECIES2_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const openModal2 = () => (dispatch) =>{
  dispatch({
    type: OPEN_MODAL2,
    payload: {
      comparison: true
    }
  })
}

export const closeModal2 = () => (dispatch) =>{
  dispatch({
    type: CLOSE_MODAL2,
    payload: {
      comparison: false
    }
  })
}