import { SHOW_CURRENT_POKEMON_MODAL, IS_COMPARING } from '../actions/pokemonCardActions';

const initialState = {
  isActive: false,
  isComparing: false,
}

function pokemonReducer (state = initialState, { type }){
  switch (type) {
    case SHOW_CURRENT_POKEMON_MODAL:
      return {
        ...state,
        isActive: !state.isActive
      }
    case IS_COMPARING:
      return {
        ...state,
        isComparing: !state.isComparing
      }
    default:
      return state;
  }
}

export default pokemonReducer;