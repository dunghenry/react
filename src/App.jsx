import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addTodo } from './store/slices/todoSlice';
const App = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector(state => state.todoReducer);
  console.log(todos);
  const handleAddTodo = () =>{
    //create new todo
    const newTodo = {
      id: Math.floor(Math.random() * 100 - 2),
      title: "Play game",
      completed: false,
    }
    //dispatch actions payload = newTodo
    dispatch(addTodo(newTodo));
  }
  return (
    <div>
        <h1>Hello React</h1>
        {/* Render data */}
        {
          todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
        <button onClick={handleAddTodo}>Add todo</button>

    </div>
  )
}

export default App