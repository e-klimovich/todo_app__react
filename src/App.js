import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


function App() {

  const [todo, setTodo] = useState([])

  return (
    <div className='container'>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <Footer todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App;
