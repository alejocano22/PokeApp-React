export const SHOW_CURRENT_POKEMON_MODAL = 'SHOW_CURRENT_POKEMON_MODAL';
export const IS_COMPARING = 'IS_COMPARING';

export const showCurrentPokemonModal = (active) => (dispatch) => {
  dispatch({
    type: SHOW_CURRENT_POKEMON_MODAL,
    payload: {
      isActive: active
    }
  })
}

export const isComparing = (compare) => (dispatch) => {
  dispatch({
    type: IS_COMPARING,
    payload: {
      isComparing: compare
    }
  })
}