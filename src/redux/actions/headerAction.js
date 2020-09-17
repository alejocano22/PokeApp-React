export const SEARCH = 'SEARCH';

export const updateSearch = (search) => {
  return {
    type: SEARCH,
    payload: {
      search
    }
  }
}