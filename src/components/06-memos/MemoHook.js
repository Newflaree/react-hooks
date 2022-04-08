import React, { useMemo, useState } from "react";
// Helpers
import { procesoPesado } from "../../helpers/procesoPesado";
// Custom Hooks
import { useCounter } from "../../hooks/useCounter";
import './memos.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter( 5000 );
  const [ show, setShow ] = useState( true );

  const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ]);

  return(
    <>
      <h1>Memo Hook</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

      <button
        className='btn btn-primary'
        onClick={ increment }
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary mx-2'
        onClick={ () => {
          setShow( !show );
        }}
      >
        Show / Hide { JSON.stringify( show ) }
      </button>
    </>
  )
}
