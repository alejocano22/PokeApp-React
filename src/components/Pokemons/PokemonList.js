import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/pokemonActions'
import './pokemon.css'

let index = 1; 

const Pokemon = (props) =>{

  const getPokemon = (() =>{
    for(let i = index; i <= index+19; i++){
      props.fetchPokemon(i) //i)
    }
    index += 20;  
  })

  // useEffect(() => {
  //   props.fetchPokemon(index)
  //   index+=20;
  // })
  console.log('me renderice')
  console.log(props)


  //filter(poke => poke.name.includes(props.search.search))
  return(  
    <div>
      {console.log(props.pokemon.pokemon)}
      <ul className='pokemonList'>
        {props.pokemon.pokemon.map(pokemon =>(
          <li key={pokemon.id} className='pokemon'>
            {console.log('render')}
            <img
              src= {"https://github.com/PokeAPI/sprites/blob/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/"+pokemon.id+".png?raw=true"}
              alt={pokemon.id}>
            </img>
            {pokemon.id} - {pokemon.name}
          </li>
        ))}
      </ul>
      <button
        onClick={ getPokemon }
        className='load'
      >Load pokemons</button>     
    </div>
  )
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: (index) => dispatch(fetchPokemon(index))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);