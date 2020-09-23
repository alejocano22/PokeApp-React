export const SEARCH = 'SEARCH';
export const HANDLE_MOBILE_ITEMS = 'HANDLE_MOBILE_ITEMS';

export const updateSearch = (search) => {
  return {
    type: SEARCH,
    payload: {
      search
    }
  }
}

export const handleMobileItems = (search) => {
  return {
    type: HANDLE_MOBILE_ITEMS
  }
}