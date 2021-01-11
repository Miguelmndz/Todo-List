import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuid } from 'uuid';

// //----------------------------------------------------------------------------
// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: uuid(), task: 'Get a Boi' }
//   ])

//   console.log(todos);

//   const handleAddTodo = (e, task) => {
//     e.preventDefault()
//     const newTask = { id: uuid(), task: task }
//     setTodos(todos.concat(newTask))
//   }

//   const handleDeleteTodo = (todoId) => {
//    const foundTodo = todos.find((todo) => todoId === todo.id) // todo
//    console.log(foundTodo);
//   }

//   return (
//     <div>
//       <TodoForm addTodo={handleAddTodo}/>
//       <Todos todos={todos} deleteTodo={handleDeleteTodo}/>
//     </div>
//   )
// }

// //----------------------------------------------------------------------------
// const TodoForm = ({addTodo}) => {
//   const [task, setNewTask] = useState('')
//   const handleTrack = e => setNewTask(e.target.value)
//   const handleAddTodo = e => {
//     addTodo(e, task) 
//     setNewTask('')
//   }
  
  
//   return <div>
//     <form onSubmit={handleAddTodo}>
//       <input placeholder='New Task' value={task}
//         onChange={handleTrack}/>
//       <button type='submit'>Add</button>
//     </form>
//   </div>
// }

// //----------------------------------------------------------------------------
// const Todos = ({todos, deleteTodo}) => {
  
//   return <div>
//     {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
//   </div>
// }

// //----------------------------------------------------------------------------
// const Todo = ({todo, deleteTodo}) => {
//   console.log(todo.id);
//   return <li>
//     {todo.task} <button onClick={() => deleteTodo(todo.id)} >X</button>
//   </li>
// }

//----------------------------------------------------------------------------
const App = () => {
  const [todos, setTodos] = useState([
    { id: uuid(), task: 'Get a Boi' },
    { id: uuid(), task: 'Pet Cat' },
    { id: uuid(), task: 'Theory Craft Builds' }
  ])

  console.log(todos);
    const handleAddTodo = (e, task) => {
    e.preventDefault()
    const newTask = { id: uuid(), task: task }
    setTodos(todos.concat(newTask))
  }
  // if it does not match it returns true. if it does match it returns false
  const handleDeleteTodo = taskId => {
    setTodos(todos.filter(todo => todo.id !== taskId))
  } 

  return (
    <div>
      <TodoForm handleAddTodo={handleAddTodo}/>
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

//----------------------------------------------------------------------------
const TodoForm = ({ handleAddTodo }) => {
  const [task, setNewTask] = useState('')
  const handleTrack = e => setNewTask(e.target.value)
  console.log(task);

  return <div>
    <form onSubmit={(e) => handleAddTodo(e,task)}>
      <input placeholder='New Task' value={task}
        onChange={handleTrack}/>
      <button type='submit'>Add</button>
    </form>
  </div>
}

//----------------------------------------------------------------------------
const Todos = ({ todos, handleDeleteTodo }) => {
  
  return <div>
    {todos.map(todo => <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />)}
  </div>
}

//----------------------------------------------------------------------------
const Todo = ({ todo, handleDeleteTodo }) => {
  console.log(todo.id);
  return <li>
    {todo.task} <button onClick={() => handleDeleteTodo(todo.id)} >X</button>
  </li>
}

ReactDOM.render (
  <App/>,
  document.getElementById('root')
)
