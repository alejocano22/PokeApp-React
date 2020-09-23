import { SEARCH, HANDLE_MOBILE_ITEMS } from '../actions/headerAction';

const initialState = {
  search: '',
  showMobileItems: false,
}

function headerReducer(state = initialState, { type, payload }){
  switch(type){
    case SEARCH:
      return {
        ...state,
        ...payload
      }
    case HANDLE_MOBILE_ITEMS:
      return {
        ...state,
        showMobileItems: !state.showMobileItems
      }
    default:
      return state;
  }
}

export default headerReducer;