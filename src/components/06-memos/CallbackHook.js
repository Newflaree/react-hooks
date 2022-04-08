import React, { useCallback, useEffect, useState } from "react";
// Components
import { ShowIncrement } from "./ShowIncrement";
import './memos.css';

export const CallbackHook = () => {
  const [ counter, setCounter ] = useState(10);

  /*
  const incrementar = () => {
    setCounter( counter + 1 );
  }
  */

  const incrementar = useCallback( ( num ) => {
    setCounter( c => c + num );
  }, [ setCounter ]);

  // Otro ejemplo
  useEffect( () => {
    // ???
  }, [ incrementar ] );

  return(
    <>
      <h1>Callback Hook { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementar } />
    </>
  )
}
