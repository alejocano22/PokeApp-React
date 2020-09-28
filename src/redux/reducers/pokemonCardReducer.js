import { IS_COMPARING, SHOW_CURRENT_POKEMON_MODAL } from '../actions/pokemonCardActions';

const initialState = {
  isActive: false,
  isComparing: false,
}

function pokemonReducer (state = initialState, { type, payload }){
  switch (type) {
    case IS_COMPARING:
      return {
        ...state,
        ...payload
      }
    case SHOW_CURRENT_POKEMON_MODAL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default pokemonReducer;