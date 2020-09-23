export const pokemonImagesUrl = 'https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/';
export const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
export const speciesApiUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

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

export const getGender = (rate) => {
  let gender = 'Genderless';
    if(rate >= 4 ){
      gender = 'Female';
    }else if (rate >= 0){
      gender = 'Male';
    }
  return gender;
}