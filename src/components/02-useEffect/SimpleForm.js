import React, {useEffect, useState} from "react";
// Componentes
import { Message } from './Message';
import './effects.css';

/*
// No se pueden usar los hooks de manera condicional, es una mala práctica y React no lo va a aceptar.
if ( true ) {
  const [ state, setState ] = useState(0);
}
*/
export const SimpleForm = () => {
  const [ formState, setFormState ] = useState({
    name:'',
    email: ''
  });

  const { name, email } = formState;

  useEffect( () => {
    //console.log('Hey');
  },[]);
  useEffect( () => {
    //console.log('formState Cambió');
  },[ formState ]);
  /*
  // El useEffect se dispara cada vez que cambia el estado de la aplicación. En este caso, si queremos prevenir ese comportamiento, tenemos que enviar un arreglo vacio como segundo parametro
  useEffect( () => {
    console.log('Hey');
  }, []);
  // También se puede estar escuchando cualquier elemento del componente
  useEffect( () => {
    console.log('formState Cambió');
  },[ email ]);
  */

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='from-group'>
        <input 
          type='text'
          name='name'
          className='from-control'
          placeholder='Escribe tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className='from-group'>
        <input 
          type='text'
          name='email'
          className='from-control'
          placeholder='Escribe tu Email'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }
    </>
  )
}
