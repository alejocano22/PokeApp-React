import { SHOW_COMPARISON_POKEMON_MODAL } from '../actions/pokemonComparisonActions';

const initialState = {
  isActive: false, 
}

function pokemonComparisonReducer (state = initialState, { type }){
  switch (type) {
    case SHOW_COMPARISON_POKEMON_MODAL:
      return {
        isActive: !state.isActive
      }
    default:
      return state;
  }
}

export default pokemonComparisonReducer;