import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const MobileItems = ({ header }) => {
  if (header.showMobileItems) {
    return(
      <div className={ styles['mobile-nav-bar'] }>
        <NavLink exact to='/' className={ styles['link'] } activeClassName={ styles['active-link'] }>PokéApp</NavLink>
        <NavLink to='/pokemon' className={styles['link']} activeClassName={styles['active-link'] }>Pokémon</NavLink>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(MobileItems);