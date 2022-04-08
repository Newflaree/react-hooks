import React, {useReducer} from "react";
import './reducer.css';
// Reducer
import { todoReducer } from "./todoReducer";

const initialState = [{
  id: new Date().getTime(),
  desc: 'Apender React',
  done: false
}];

export const TodoApp = () => {
  const [ todos ] = useReducer(
    todoReducer, 
    initialState
  );

  return(
    <>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Mundo</li>
        <li>Hola de nuevo</li>
      </ul>
    </>
  )
}
