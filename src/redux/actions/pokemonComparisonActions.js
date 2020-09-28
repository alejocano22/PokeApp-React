export const SHOW_COMPARISON_POKEMON_MODAL = 'SHOW_COMPARISON_POKEMON_MODAL';

export const showComparisonPokemonModal = () => (dispatch) => {
  dispatch({
    type: SHOW_COMPARISON_POKEMON_MODAL,
  })
}