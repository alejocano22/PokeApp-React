export const SHOW_CURRENT_POKEMON_MODAL = 'SHOW_CURRENT_POKEMON_MODAL';
export const IS_COMPARING = 'IS_COMPARING';

export const showCurrentPokemonModal = () => (dispatch) => {
  dispatch({
    type: SHOW_CURRENT_POKEMON_MODAL,
  })
}

export const isComparing = () => (dispatch) => {
    dispatch({
      type: IS_COMPARING,
    })
}