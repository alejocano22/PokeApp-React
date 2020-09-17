export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const fetchCurrentPokemon = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_POKEMON_REQUEST
  })
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon)
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