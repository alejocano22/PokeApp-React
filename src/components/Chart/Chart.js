import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = (props) => {
  const { currentPokemonIndex, comparisonPokemonIndex } = props.pokemonList;
  const currentPokemon = props.pokemonList.pokemonFetched[currentPokemonIndex];
  const comparisonPokemon = props.pokemonList.pokemonFetched[comparisonPokemonIndex];

  const comparisonPokemonData = {
    label: comparisonPokemon.name,
    data: comparisonPokemon.stats.map(({ base_stat }) => (base_stat)),
    backgroundColor:[
      '#b3a125',
      '#b3a125',
      '#b3a125',
      '#b3a125',
      '#b3a125',
      '#b3a125',
    ],
    borderWidth: 5,
    hidden: props.currentPokemon.isActive
  }

  const data = {
    labels: currentPokemon.stats.map(({ stat }) => (stat.name)),
    datasets: [
      {
        label: currentPokemon.name,
        data: currentPokemon.stats.map(({ base_stat }) => (base_stat)),
        backgroundColor:[
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
        ],
        borderWidth: 5
      },
      {
        ...comparisonPokemonData,
        hidden: props.currentPokemon.isActive
      }
      
    ]
  }

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true
          },
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
    }
  }
  return(
    <div className={ styles['chart'] }>
      <Bar
        data={ data }
        options={ options }
        datasetKeyProvider={ () => (Math.random()) }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Chart);