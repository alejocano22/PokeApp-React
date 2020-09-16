export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const fetchPokemon = () => (dispatch) => {
  dispatch({
    type: FETCH_POST_REQUEST
  })
  
  fetch('https://pokeapi.co/api/v2/pokemon/22')
    .then(res => res.json())
    .then(pokemon => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: {
          pokemon
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