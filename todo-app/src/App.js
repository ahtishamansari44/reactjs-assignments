import React from 'react';
import logo from './logo.svg';
import Todo from './components/todo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

function App() {
  return (
     <Todo />
  )
    }


export default App;
