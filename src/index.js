import React from 'react';
import ReactDOM from 'react-dom';
// App
//import { HooksApp } from './HooksApp';
// Components
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterCustom } from './components/01-useState/CounterCustom';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExamRef } from './components/04-useRef/RealExamRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
import {MemoHook} from './components/06-memos/MemoHook';

ReactDOM.render(
  <MemoHook />,
  document.getElementById('root')
);
