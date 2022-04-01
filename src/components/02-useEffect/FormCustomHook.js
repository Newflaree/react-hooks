import React, { useEffect } from "react";
// Custom Hooks
import { useForm } from "../../hooks/useForm";
import './effects.css';

export const FormCustomHook = () => {
  const [ formValues, handleInputChange ] = useForm({
    name:'',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect( () => {
    console.log( 'Changed email' );
  }, [ email ]);

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log( formValues );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Form with Custom hook</h1>
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

      <div className='from-group'>
        <input 
          type='password'
          name='password'
          className='from-control'
          placeholder='*****'
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}
