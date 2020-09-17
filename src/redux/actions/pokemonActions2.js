export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const fetchPokemon = (url) => (dispatch) => {  
  dispatch({
    type: FETCH_POST_REQUEST
  })

  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: {
          count: pokemon.count,
          next: pokemon.next,
          previous: pokemon.previous,
          pokemons: pokemon.results
        }
      })
    }).catch(error =>{
      dispatch({
        type: FETCH_POST_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}