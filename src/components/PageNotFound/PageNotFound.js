import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFoundImage from '../../images/psyduck.png';
import styles from './pageNotFound.module.css';

const NotFoundRoute = () => {
  return(
    <div className={ styles['not-found-container'] }>
      <img
        src={ NotFoundImage }
        alt='Not found'
        className={ styles['not-found-image'] }
      ></img>
      <h1 className={ styles['not-found-message'] }>PAGE NOT FOUND!</h1>
      <NavLink to='/' className={ styles['back-home'] }>Back Home</NavLink>
    </div>
  )
}

export default NotFoundRoute;