import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart2 = (props) =>{

  const data = {
    labels: props.currentPokemon.stats.map(({stat}) => (stat.name)),
    datasets: [
      {
        label: props.currentPokemon.name,
        data: props.currentPokemon.stats.map(({base_stat}) => (base_stat)),
        backgroundColor:[
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
          '#cc0000',
        ],
        borderWidth: 5
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
    <div className={styles['chart']}>
      <Bar
        data={data}
        options={options}
      /> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Chart2);