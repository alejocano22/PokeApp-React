import React from 'react';
import { connect } from 'react-redux';
import './header.css'

const Header = (props) =>{
  
  return(
    <div>
      <div className='header'>
        <img
          className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
          alt="pokeball"
        ></img>
        <h1 className='title'>Pokemon App</h1>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {

  return state;
}


export default connect(mapStateToProps)(Header);