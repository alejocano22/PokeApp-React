export const SEARCH = 'SEARCH';
export const HANDLE_MOBILE_ITEMS = 'HANDLE_MOBILE_ITEMS';

export const updateSearch = (search) => ({
  type: SEARCH,
  payload: {
    search
  }
})

export const handleMobileItems = () => ({
  type: HANDLE_MOBILE_ITEMS
})