import React from 'react';
import './useref.css';

export const FocusScreen = () => {
  const handleClick = () => {
    document.querySelector('input').select();
  }

  return(
    <>
      <h1>Focus Screen</h1>
      <br />

      <input 
        className='form-control'
        placeholder='Su nombre'
      />

      <button 
        className='btn btn-outline-primary mt-5'
        onClick={ handleClick }
      >
        Focus
      </button>
    </>
  )
}
