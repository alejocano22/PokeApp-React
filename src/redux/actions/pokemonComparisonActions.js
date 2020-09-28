export const SHOW_COMPARISON_POKEMON_MODAL = 'SHOW_COMPARISON_POKEMON_MODAL';

export const showComparisonPokemonModal = (active) => (dispatch) =>{
  dispatch({
    type: SHOW_COMPARISON_POKEMON_MODAL,
    payload: {
      isActive: active
    }
  })
}