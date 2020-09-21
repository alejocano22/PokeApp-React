export const fetchPokemon = (url) => {  
  return fetch(url)
    .then(res => res.json())
    .then(pokemon => (
      {
      payload: {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types,
        abilities: pokemon.abilities,
        stats: pokemon.stats
      }
    })).catch(error => (
      {
        payload: {
          error: error.toString()
        }
      }
    ))
}

export const fetchSpecies = (url) => {  
  return fetch(url)
    .then(res => res.json())
    .then(pokemon => (
      {
      payload: {
        description: pokemon.flavor_text_entries.filter(entry => entry.language.name === 'en')[0].flavor_text,
        genderRate: pokemon.gender_rate
      }
    })).catch(error =>(
      {
        payload: {
          error: error.toString()
        }
      }
    ))
}