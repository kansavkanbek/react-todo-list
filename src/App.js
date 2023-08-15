import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");


  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form
       inputText = {inputText}
       setInputText = {setInputText}      
      />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
