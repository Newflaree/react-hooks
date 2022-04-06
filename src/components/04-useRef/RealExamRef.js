import React, {useState} from 'react';
// Components
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './useref.css';

export const RealExamRef = () => {
  const [ show, setShow ] = useState( false );

  return(
    <>
      <h1>Real Example Ref</h1>
      <hr />

      { show && <MultipleCustomHooks /> }

      <button 
        className='btn btn-info mt-5'
        onClick={ () => {
          setShow( !show )
        }}
      >
        Show / Hide
      </button>
      
    </>
  )
}


