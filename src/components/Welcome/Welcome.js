import React from 'react';
import Header from '../Header';
import welcomeImage from '../../images/pokeBackground.png';
import style from './welcome.module.css';

const Welcome = () => {
  return(
    <div className={ style['welcome-container'] }>
      <Header hiddenSearch={ true }/>
      <div className={ style['welcome'] }>
        <img
          src={ welcomeImage }
          alt='welcome'
          className={ style['welcome-image'] }
        >
        </img>
        <h1 className={ style['welcome-message'] }>Welcome!</h1>
      </div>
      <footer className={ style['footer'] }>
        <p className={ style['footer-message'] }>PokéApp | @alejocano22 HTML Template | All Rights Reserved.</p>
      </footer> 
    </div>
  )
}

export default Welcome;