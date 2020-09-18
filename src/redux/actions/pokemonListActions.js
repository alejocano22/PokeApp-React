export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';

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
          pokemons: pokemon.results
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