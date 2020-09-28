import { SHOW_COMPARISON_POKEMON_MODAL } from '../actions/pokemonComparisonActions';

const initialState = {
  isActive: false, 
}

function pokemonComparisonReducer (state = initialState, { type, payload }){
  switch (type) {
    case SHOW_COMPARISON_POKEMON_MODAL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonComparisonReducer;