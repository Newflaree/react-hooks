import React from "react";
import './counter.css';
// Custom Hooks
import {useCounter} from "../../hooks/useCounter";

export const CounterCustom = () => {
  const { state: counter, increment, decrement, reset } = useCounter( 100 );

  return (
    <>
      <h1>Custom Counter: { counter }</h1>
      <hr />

      <button 
        onClick={ () => increment(2) }
        className='btn btn-primary mx-1'
      >
        +1
      </button>
      <button 
        className='btn btn-info mx-1'
        onClick={ reset }
      >
        Reset
      </button>
      <button 
        className='btn btn-danger mx-1'
        onClick={ () => decrement(2) }
      >
        -1
      </button>
    </>
  )
}
